<template>
  <h3>Installed CLI Plugins</h3>
  <span>{{this.latitude}} {{this.longitude}}</span>
  <div>{{this.correctCountry}}</div>
  <div>{{this.numGuesses}}</div>
  <div>Current Streak: {{this.curStreak}}</div>
  <div>Max Streak: {{this.maxStreak}}</div>
  <ChoiceList
      :titles = "countryChoices"
      :correct-choice="correctCountry"
      :cur-question="curQuestion"
      v-on:choiceSelected='handleSelectedChoice'/>
  <RoundOverModal
      v-if="roundOver"
      :latitude="latitude"
      :longitude="longitude"
      :roundWon="roundWon"
      :location="correctCountry"
      :origin="'whatCountry'"
      v-on:nextLocation='roundSetup'
  />
</template>

<script>
import {countryList} from "./countryList.js"
import ChoiceList from '../components/choiceComponents/ChoiceList.vue'
import RoundOverModal from '../components/modalComponents/RoundOverModal.vue'

export default {
name: "NearestCountry",
  components: {ChoiceList, RoundOverModal},
  data: function(){
    return{
      latitude: null,
      longitude: null,
      correctCountry: null,
      countryChoices:null,
      roundOver: null,
      roundWon: null,
      numChoices:4,
      numGuesses:null,
      curQuestion: 1,
      curStreak:0,
      maxStreak:0,
    }
  },
  async created () {
    await this.roundSetup();

  },
  methods:
      {
        async roundSetup(){
          this.numGuesses=this.numChoices-1;
          this.roundOver = false;
          await this.getcorrectCountry();
          await this.generateCountryChoices(this.numChoices);
        },
        async getcorrectCountry(){
          let url = `api/landlocation?randomland=yes&json=1`;
          const res = await fetch(url);
           let res_json = await res.json();
           this.correctCountry = countryList[res_json["nearest"]["state"]];
           this.latitude =  Math.round(parseFloat(res_json["nearest"]["latt"])*100)/100;
            this.longitude =  Math.round(parseFloat(res_json["nearest"]["longt"])*100)/100;
        },

        async generateCountryChoices(numChoices){
          let countryChoices = [this.correctCountry];
          let countryCodes = Object.keys(countryList);
          for (let i = 0; i < numChoices-1; i++){
            let curCountry =  countryList[countryCodes[ countryCodes.length * Math.random() << 0]];
            if (curCountry !== this.correctCountry){
              countryChoices.push(curCountry);
            }else{
              i -=1;
            }
          }
          this.countryChoices = this.shuffleCountries(countryChoices);
        },

         shuffleCountries(countryArray) {
          for (let i = countryArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = countryArray[i];
            countryArray[i] = countryArray[j];
            countryArray[j] = temp;
            }
           return countryArray;
          },

        handleSelectedChoice(isCorrect){
          if (isCorrect){
            this.roundWon = true;
            this.roundOver = true;
            this.curQuestion+=1;
            this.curStreak+=1;
            if (this.curStreak > this.maxStreak){
              this.maxStreak = this.curStreak
            }
          }else{
            this.numGuesses-=1;
            if (this.numGuesses===0){
              this.roundWon = false;
              this.roundOver = true;
              this.curStreak = 0;
            }
          }
        }

      }
}
</script>

<style scoped>

</style>
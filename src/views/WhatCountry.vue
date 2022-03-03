<template>
    <span>
      <LatLongDisplay
          :val="this.latitude"
      />
      <LatLongDisplay
          :val="this.longitude"
      />
      </span>
  <div class="label-container">
    <span class="label">Latitude</span>
    <span class="label">Longitude</span>
  </div>

  <ChoiceList
      :titles = "countryChoices"
      :correct-choice="correctCountry"
      :cur-question="curRound"
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
  <div>{{this.correctCountry}}</div>
  <div>Round: {{this.curRound}}</div>
  <div>Guesses Remaining: {{this.numGuesses}}</div>
  <div>Current Streak: {{this.curStreak}}</div>
  <div>Max Streak: {{this.maxStreak}}</div>
</template>

<script>
import {countryList} from "./countryList.js";
import ChoiceList from '../components/choiceComponents/ChoiceList.vue';
import RoundOverModal from '../components/modalComponents/RoundOverModal.vue';
import LatLongDisplay from '../components/LatLongDisplay.vue';

export default {
name: "NearestCountry",
  components: {LatLongDisplay, ChoiceList, RoundOverModal},
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
      curRound: 1,
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
            this.curRound+=1;
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
.label {
  font-size:30px;
  margin-left: 6%;
  margin-right: 6%;

}

.label-container {
  margin-bottom: 2%;
}
</style>
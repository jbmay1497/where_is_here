<template>
  <h3>Installed CLI Plugins</h3>
  <div>{{this.latitude}}</div>
  <div>{{this.longitude}}</div>
  <div>{{this.correctCountry}}</div>
  <ChoiceList :titles = "countryChoices"/>
</template>

<script>
import {countryList} from "./countryList.js"
import ChoiceList from '../components/choiceComponents/ChoiceList.vue'

export default {
name: "NearestCountry",
  components: {ChoiceList},
  data: function(){
    return{
      latitude: null,
      longitude: null,
      correctCountry: null,
      countryChoices:null
    }
  },
  async created () {
    await this.getcorrectCountry();
    await this.generateCountryChoices(4);
  },
  methods:
      {
        async getcorrectCountry(){
          let url = `api/landlocation?randomland=yes&json=1`;
          const res = await fetch(url);
           let res_json = await res.json();
           this.correctCountry = countryList[res_json["nearest"]["state"]];
           this.latitude =  res_json["nearest"]["latt"];
            this.longitude =  res_json["nearest"]["longt"];
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
          }

      }
}
</script>

<style scoped>

</style>
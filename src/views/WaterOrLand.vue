<template>
  <span>{{this.latitude}} {{this.longitude}}</span>
  <div>{{this.correctLocation}}</div>
  <div>{{this.gameWon}}</div>
  <ChoiceList
      :titles = "locationOptions"
      :correct-choice="correctLocation"
      v-on:choiceSelected='handleSelectedChoice'/>
</template>

<script>
import ChoiceList from '../components/choiceComponents/ChoiceList.vue'

export default {
  name: "WaterOrLand",
  components: {ChoiceList},
  data: function(){
   return{
     latitude: null,
     longitude: null,
     correctLocation: null,
     locationOptions: ["Water", "Land"],
     gameWon: false
   }

 },
  async created () {
    this.generateLatitude();
    this.generateLongitude();
  },
  async beforeMount(){
    await this.getWaterOrLand(this.latitude, this.longitude);
  },
  methods: {
    generateLatitude() {
      this.latitude = (Math.random() * 90 * (Math.random() < 0.5 ? -1 : 1)).toFixed(2);
      return this.latitude;
    },

    generateLongitude() {
      this.longitude = (Math.random() * 180 * (Math.random() < 0.5 ? -1 : 1)).toFixed(2);
      return this.longitude
    },

    async getWaterOrLand(latitude, longitude){
      const key = '1yuKk6UQrfcBLdx_Afds';
      let url = `https://api.onwater.io/api/v1/results/${latitude},${longitude}?access_token=${key}`;
      const res = await fetch(url);
      let res_json = await res.json();
      this.correctLocation = res_json["water"] ? "Water" : "Land";
    },

    handleSelectedChoice(isCorrect){
      if (isCorrect){
        this.gameWon = true;
      }
    }
  }
}
</script>

<style scoped>

</style>
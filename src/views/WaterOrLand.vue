<template>
    <span>{{this.latitude}} {{this.longitude}}</span>
    <div>{{this.correctLocation}}</div>
    <ChoiceList
        :titles = "locationOptions"
        :correct-choice="correctLocation"
        :cur-question="curQuestion"
        v-on:choiceSelected='handleSelectedChoice'/>
    <RoundOverModal
        v-if="roundOver"
        :latitude="latitude"
        :longitude="longitude"
        v-on:nextLocation='roundSetup'
    />
</template>

<script>
import ChoiceList from '../components/choiceComponents/ChoiceList.vue'
import RoundOverModal from '../components/modalComponents/RoundOverModal.vue'

export default {
  name: "WaterOrLand",
  components: {
    ChoiceList,
    RoundOverModal},
  data: function(){
   return{
     latitude: null,
     longitude: null,
     correctLocation: null,
     locationOptions: ["Water", "Land"],
     roundOver: null,
     curQuestion: 1,
   }

 },
  async created () {
    await this.roundSetup();

  },
  methods: {
    async roundSetup(){
      this.roundOver = false;
      await this.generateLatitude();
      await this.generateLongitude();
      await this.getWaterOrLand(this.latitude, this.longitude);
    },
     generateLatitude() {
      this.latitude = Math.round((Math.random() * 90 * (Math.random() < 0.5 ? -1 : 1))*100)/100;
      return this.latitude;
    },

    generateLongitude() {
      this.longitude = Math.round((Math.random() * 180 * (Math.random() < 0.5 ? -1 : 1))*100)/100;
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
        this.roundOver = true;
        this.curQuestion+=1;

      }
    }
  }
}
</script>

<style scoped>

</style>
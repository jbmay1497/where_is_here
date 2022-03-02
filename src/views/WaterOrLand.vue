<template>
  <div>{{this.latitude}}</div>
  <div>{{this.longitude}}</div>
  <div>{{this.water}}</div>
</template>

<script>
export default {
  name: "WaterOrLand",
  data: function(){
   return{
     latitude: null,
     longitude: null,
     water: null
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
      this.water = res_json["water"];
    }
  }
}
</script>

<style scoped>

</style>
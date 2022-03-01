<template>
  <h3>Installed CLI Plugins</h3>
</template>

<script>
export default {
  name: "WaterOrLand",
  data: function(){
   return{
     latitude: null,
     longitude: null,
     countryData: null
   }
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
  }
}
</script>

<style scoped>

</style>
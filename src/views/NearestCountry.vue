<template>
  <h3>Installed CLI Plugins</h3>
  <div>{{this.latitude}}</div>
  <div>{{this.longitude}}</div>
  <div>{{this.countryData}}</div>
</template>

<script>
export default {
name: "NearestCountry",
  data: function(){
    return{
      latitude: null,
      longitude: null,
      countryData: null
    }
  },
  async created () {
    this.generateLatitude();
    this.generateLongitude();
  },
  async beforeMount(){
  console.log(this.latitude);
    console.log(this.longitude);
    await this.getCountryData(this.latitude, this.longitude);
    console.log(`country data is: ${this.countryData}`)
  },
  methods:
      {
        generateLatitude(){
          this.latitude = (Math.random() * 90 * (Math.random() < 0.5 ? -1 : 1)).toFixed(2);
          return this.latitude;
        },
        generateLongitude(){
          this.longitude = (Math.random() * 180 * (Math.random() < 0.5 ? -1 : 1)).toFixed(2);
          return this.longitude
        },
        async getCountryData(latitude, longitude){
          let key = "A5MFGRXI0YPHNVY6GDY3E2JIDQVJLR0P";
          let url = `/v2/city?key=${key}&lat=${latitude}&lng=${longitude}`;
          console.log(url);
          const res = await fetch(url);
          console.log(res);
           this.CountryData = await res.json();
           return this.CountryData;
        }

      }
}
</script>

<style scoped>

</style>
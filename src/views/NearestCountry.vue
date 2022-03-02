<template>
  <h3>Installed CLI Plugins</h3>
  <div>{{this.latitude}}</div>
  <div>{{this.longitude}}</div>
  <div>{{this.countryData}}</div>
</template>

<script>
import {countryList} from "./countryList.js"

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
    await this.getCountryData();
  },
  methods:
      {
        async getCountryData(){
          let url = `api/landlocation?randomland=yes&json=1`;
          const res = await fetch(url);
           let res_json = await res.json();
           this.countryData = countryList[res_json["nearest"]["state"]];
           this.latitude =  res_json["nearest"]["latt"];
            this.longitude =  res_json["nearest"]["longt"];
        }

      }
}
</script>

<style scoped>

</style>
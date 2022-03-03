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
        :titles = "locationOptions"
        :correct-choice="correctLocation"
        :cur-question="curRound"
        v-on:choiceSelected='handleSelectedChoice'/>
    <RoundOverModal
        v-if="roundOver"
        :latitude="latitude"
        :longitude="longitude"
        :roundWon="roundWon"
        :location="correctLocation"
        :origin="'waterorland'"
        v-on:nextLocation='roundSetup'
    />
  <div>Round: {{this.curRound}}</div>
  <div>Current Streak: {{this.curStreak}}</div>
  <div>Max Streak: {{this.maxStreak}}</div>
</template>

<script>
import ChoiceList from '../components/choiceComponents/ChoiceList.vue';
import RoundOverModal from '../components/modalComponents/RoundOverModal.vue';
import LatLongDisplay from '../components/LatLongDisplay.vue';

export default {
  name: "WaterOrLand",
  components: {
    LatLongDisplay,
    ChoiceList,
    RoundOverModal
  },
  data: function () {
    return {
      latitude: null,
      longitude: null,
      correctLocation: null,
      locationOptions: ["Water", "Land"],
      roundOver: null,
      roundWon: null,
      numGuesses: null,
      curRound: 1,
      curStreak:0,
      maxStreak:0,
    }

  },
  async created() {
    await this.roundSetup();

  },
  methods: {
    async roundSetup() {
      this.numGuesses = 1;
      this.roundOver = false;
      await this.generateLatitude();
      await this.generateLongitude();
      await this.getWaterOrLand(this.latitude, this.longitude);
    },
    generateLatitude() {
      this.latitude = Math.round((Math.random() * 90 * (Math.random() < 0.5 ? -1 : 1)) * 100) / 100;
      return this.latitude;
    },

    generateLongitude() {
      this.longitude = Math.round((Math.random() * 180 * (Math.random() < 0.5 ? -1 : 1)) * 100) / 100;
      return this.longitude
    },

  //determines whether the randomly generated lat and long coordinates are located on land or in the water
  //uses api from https://onwater.io/
    async getWaterOrLand(latitude, longitude) {
      const key = '1yuKk6UQrfcBLdx_Afds';
      let url = `https://api.onwater.io/api/v1/results/${latitude},${longitude}?access_token=${key}`;
      const res = await fetch(url);
      let res_json = await res.json();
      this.correctLocation = res_json["water"] ? "Water" : "Land";
    },

    handleSelectedChoice(isCorrect) {
      if (isCorrect) {
        this.roundWon = true;
        this.roundOver = true;
        this.curRound += 1;
        this.curStreak+=1;
        if (this.curStreak > this.maxStreak){
          this.maxStreak = this.curStreak
        }
      } else {
        this.numGuesses -= 1;
        if (this.numGuesses === 0) {
          this.roundWon = false;
          this.roundOver = true;
          this.curRound += 1;
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
  margin-bottom: 1%;
}

</style>
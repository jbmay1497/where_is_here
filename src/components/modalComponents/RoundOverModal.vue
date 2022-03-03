<template >
  <div class="modal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header" id="map">
        </div>
        <div class="modal-body">

          <p v-if="roundWon">You got it!</p>
          <p v-else>Too Bad!</p>
          <p v-if="origin === 'waterOrLand'">Latitude {{latitude}}
            and Longitude {{longitude}} is located {{location === "Water" ? "in the water" : "on land"}}</p>
          <p v-else>Latitude {{latitude}} and Longitude {{longitude}} is located in  {{location}}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click.prevent="nextLocation">Next Round</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "RoundOverModal",
  props: {
    latitude: Number,
    longitude: Number,
    roundWon: Boolean,
    location: String,
    origin: String
  },
  data: function() {
    return {
      map:null
    }
  },
  mounted() {
    let latLng = {lat: this.latitude, lng: this.longitude};
    this.map = new window.google.maps.Map(document.getElementById("map"), {
      center: latLng,
      zoom: 4,
    })
    new window.google.maps.Marker({
      position: latLng,
      map: this.map
    })
  },
  methods:
      {
        nextLocation(){
          this.$emit('nextLocation')
        }
      }

}
</script>

<style scoped>
.modal{
  display: block;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
}

.modal-dialog{
  height: 50%;
}

.modal-content{
  height:100%;
}

.modal-header{

  width: 100%;
  height: 100%;
}

#map {
  height: 100%;
  width: 100%;
}

</style>

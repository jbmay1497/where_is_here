<template id="test">
  <div id="map"></div>
</template>

<script>
export default {
  name: "LocationMap",
  data: function() {
    return {
      map: null
    }
  },
   mounted(){
    this.initMap();
  },
  methods: {
    initMap(){
      console.log(window.google);
      this.map = new window.google.maps.Map(document.getElementById("map"), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8,
      });
    }
  }
}
</script>

<style>
#map {
  height: 100%;
  width: 100%;
}

</style>
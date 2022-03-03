<template >
  <div class="modal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header" id="map">
        </div>
        <div class="modal-body">
          <p>you won!</p>
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
    longitude: Number
  },
  data: function() {
    return {
      map:null
    }
  },
  mounted() {
    console.log(window.google);
    this.map = new window.google.maps.Map(document.getElementById("map"), {
      center: {lat: this.latitude, lng: this.longitude},
      zoom: 7,
    })
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
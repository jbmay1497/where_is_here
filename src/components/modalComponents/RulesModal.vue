<template >
  <div class="modal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <h2 class="modal-header">
          Rules
        </h2>
        <div class="modal-body">
          <p> Welcome to my site! This site has 2 coordinate-based guessing games based on longitude and latitude positions. 
            Below you can find the rules for each game:</p>
          <h3>Water or Land?:
          </h3>
            <p>Based on a randomly generated Latitude and Longitude, determine whether the location is in the water or on land.</p>
            <h3>What Country?:
            </h3>
              <p>Based on a randomly generated, land-based Latitude and Longitude, 
                determine what country the coordinates are located in.</p>
            
            <h4>Tips:</h4>
            <p>1. The position Latitude 0, Longitude 0 is located in the Atlantic Ocean, below West Africa.
              </p>
              <p>2. Latitude goes from North to South, and Longitude goes from East to West.
              </p>
              <p>3. Latitude goes from -90 to 90, Longitude goes from -180 to 180.
                </p>
              <p>4. A positive Latitude is north of Latitude 0, while a negative Latitude is south. 
                A positive Longitude goes east of Longitude 0, while a negative Longitude goes west.
              </p>
              
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click.prevent="closeRules">Close</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "RulesModal",
  methods:
      {
        closeRules(){
          this.$emit('closeRules')
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

.modal-body{
  text-align: left;
}
</style>
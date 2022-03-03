<template>
    <div id="val">{{val}}</div>

</template>

<script>
export default {
  name: "LatLongDisplay",
  props:{
    val:Number,
  }
}
</script>

<style scoped>

#val{
  margin-top:5%;
  margin-left:2.5%;
  margin-right:2.5%;
  font-size: 100px;
  display: inline-block;
}
</style>
<template>
  <div id="earth"></div>
  <h3>Games:</h3>
  <router-link to="/waterorland" class = "games">Water or Land?</router-link>
  <router-link to="/whatcountry" class = "games">What Country?</router-link>
</template>

<script>
export default {
name: "HomePage"
}
</script>

<style scoped>
/*globe animation source: https://stackoverflow.com/questions/27781634/rotating-globe-in-css*/
#earth {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1%;
  margin-bottom: 1%;
  width: 300px;
  height: 300px;
  background: url(https://web.archive.org/web/20150807125159if_/http://www.noirextreme.com/digital/Earth-Color4096.jpg);
  border-radius: 50%;
  background-size: 610px;
  box-shadow: inset 8px 36px 80px 36px rgb(0, 0, 0), inset -6px 0 12px 4px rgba(255, 255, 255, 0.3);
  animation-name: rotate;
  animation-duration: 12s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  -webkit-animation-name: rotate;
  -webkit-animation-duration: 12s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
}
@keyframes rotate {
  from {
    background-position: 0px 0px;
  }
  to {
    background-position: 610px 0px;
  }
}
@-webkit-keyframes rotate {
  from {
    background-position: 0px 0px;
  }
  to {
    background-position: 610px 0px;
  }
}
h3{
  font-weight: 100;
  font-size: 50px;
}

a {
  font-weight: 50;
  font-size: 50px;
  display: flex;
  justify-content: center;
  text-decoration: none;
  position: relative;
  width: fit-content;
  margin:0 auto;
}

.games:hover::after {
  position: absolute;
  content: '';
  height: 2px;
  margin-bottom:1%;
  background-color: black;
  display: block;
  bottom: -1px;
  animation: grow .75s;
  animation-fill-mode: forwards;
}

@keyframes grow {
  from {width: 0%;}
  to {width: calc(100% - 1em);}
}

</style>
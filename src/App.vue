<template>
  <nav class="navbar  navbar-dark bg-dark py-3">
    <div class="container-fluid-nav text-center">
      <router-link class="navbar-brand" to="/">Where am I?</router-link>
      <button id="rule-btn" class="btn btn-outline-light btn-lg my-2 my-sm-0" type="button"
              @click.prevent="displayRules">Rules</button>
      <RulesModal
        v-if="showRules"
       v-on:closeRules="closeRules"
        />
    </div>


  </nav>
  <router-view/>
</template>

<script>
import RulesModal from './components/modalComponents/RulesModal.vue';
export default {
  components: {RulesModal},
  data: function(){
    return{
      showRules:false
    }
  },
  methods:{
    displayRules(){
      this.showRules = true;
    },
    closeRules(){
      this.showRules = false;
    }
  }

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container-fluid-nav {
  width: 100%;
  position: relative;
  text-align: center;
}

.container-fluid-nav a{
  font-weight: 50;
  font-size: 30px;

}

.navbar-brand{
margin-left:6.5%
}

#rule-btn{
  display: inline-block;
  float:right;
}
</style>

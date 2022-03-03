<template>
  <nav class="navbar  navbar-dark bg-dark py-3">
    <div class="container-fluid-nav text-center">
      <router-link class="navbar-brand" to="/">Where is Here?</router-link>
    </div>

  </nav>
  <router-view/>
</template>

<script>
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
  font-size: 30px !important;

}
</style>

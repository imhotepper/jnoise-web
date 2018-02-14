<template>
  <div id="app">
    <h1>Welcome to <a href='/'>jNoise</a></h1>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  a {
         color: #4F748F;
    }
    h1 a{
      text-decoration: none;
    }

    .jn-padd-bottom{
      margin-bottom: 10px;
    }
</style>

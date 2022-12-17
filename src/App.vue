<template>
  <img alt="Vue logo" src="https://cdn.discordapp.com/attachments/768126732955549757/996963521294250015/unknown.png">
  <HelloWorld msg="Welcome to Vue.js"/>
  <ComponenteUno></ComponenteUno>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ComponenteUno from './components/ComponenteUno.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
    ComponenteUno
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
  margin-top: 60px;
}
</style>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ text }}</h2>
    <ComponenteUno></ComponenteUno>
  </div>
</template>

<script>
import ComponenteUno from './ComponenteUno.vue';

export default {
  name: 'HelloWorld',
  
  components: {
    ComponenteUno
  },
  props: {
    msg: String
  },
  data(){
    return {
      text: "----"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

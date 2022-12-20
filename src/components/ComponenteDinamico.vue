<script setup>

const name = 'Vue 3';
const stylecolor = "color: blue";

//v-bind: = :

</script>

<template>
    <h1>alo {{name}}</h1>
    <h2 :style="stylecolor">soy chico :'v</h2>
</template>



<style>
h1 {
    size: 12px;
}
</style>
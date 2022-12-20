<script setup>

const name = 'alomso bordones';
const stylecolor = "color: blue";
const arraycolor = ["red","yellow","green"];
//const tamaños = ["12px","50px","100px"];

const act = false;

//v-bind: = :

</script>

<template>
    <h1>alo {{ name.toUpperCase() }}</h1>
    <h2 :style="stylecolor">{{arraycolor}}</h2>
    <h2 :style="`color: ${arraycolor[2]}`">soy chico :'v</h2>
    <h2 :style="`color: ${arraycolor[1]}`">soy enorme >:v</h2>

    <!-- recordar el orden en el marcado -->
 
    <p1 v-if="act"> ping?</p1>
    <p1 v-if="!act"> pong</p1>

    <h1 v-show="act">aparesco </h1>


</template>

<style>
h1 {
    size: 12px;
}
</style>
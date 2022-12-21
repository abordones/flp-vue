<script setup>

const name = 'alomso bordones';
const stylecolor = "color: blue";
const arraycolor = ["red","yellow","green"];
//const tamaños = ["12px","50px","100px"];
const object = ["quien","shota","sos"];
//para iterar los elementos dejo el v-fori luego los elementos en {{}}
//para poner indice i

const act = true;

const fruits = [{
    name: "apple",
    price: "1 $",
    desc: "an apple",
    },
    {
    name: "orange",
    price: "2 $",
    desc: "an orange",
    },
    {
    name: "banana",
    price: "1.5 $",
    desc: "a banana",
    },  
];



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

    <ul>
        <li v-for="(palabra, index) in object" :key="index">
                {{ palabra }}  {{ index }}
        </li>
    </ul>

    <ul>
        <li v-for="fruta in fruits" :key="fruta.price">
                {{ fruta.name }} | {{ fruta.price }} | {{ fruta.desc }}
        </li>
    </ul>

    <h1 v-show="act">aparesco </h1>

</template>

<style>

h1 {
    size: 12px;
}

ul {
    size: 40px;
}
</style>
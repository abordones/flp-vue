<script setup>
import {ref} from 'vue'

const name = "Cosas y más cosas"

//metodo methods
const handleclick = (message) =>{
    console.log(message)
}

let n = ref(0);
const counter = () => {
    //console.log('aumenta')
    n.value ++;
    console.log(n)
};

const nounter = () => {
    //console.log('aumenta')
    n.value --;

    console.log(n)
};

const reset = () => {
    n.value = 0;
}

//v-on: y @ son iguales
//right.prevent no te hace salir esa venta molesta

</script>

<template>
    <div :class="voyamorir">
        <h1>{{ name }}</h1>
        <button v-on:click="handleclick('BOTON 1')"> BOTON 1</button>
        |
        <button @click.right.prevent="handleclick('BOTON 2')"> BOTON 2</button>
        |
        <button @click.middle="handleclick('BOTON 3')"> BOTON 3</button>

        <p>-</p>
        <!-- no es necesario poner el .value en este caso -->
        <button @click="counter"> +1 </button> |
        <button @click="nounter"> -1 </button> |
          
        <button @click="reset"> Reiniciar </button> 
        <h3 :class="n > 0 ? 'positive' : 'negative' ">{{ n }}</h3>
    </div>
</template>

<style>
#voyamorir {
    text-align: right;
    color: #343c42;
}

.positive {
    color:green
}

.negative {
    color: red;
}
</style>

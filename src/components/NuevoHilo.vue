<template>
    <div>
        <div>

            <div class="container">

<div class="card">
    <div class="card-header">
        Crear Hilos
    </div>
    <div class="card-body"> 

        <form v-on:submit.prevent="agregarHilo">

            <div class="form-group">
                <label for="nombre">Título:</label>
                <input type="text"
                    class="form-control" required name="titulo" v-model="hilo.name_t" id="titulo" aria-describedby="helpId" placeholder="Título">
                <small id="helpId" class="form-text text-muted">Escribe el titulo del Hilo</small>                 
            </div>
            
            <div id="p_cuerpo">
                .
            </div>
            <div id="p_cuerpo">
                .
            </div>

            <div class="btn-group" role="group" aria-label="">
                <button type="submit" class="btn btn-success">Subir</button>
                <span style="color: white">||</span>
                <router-link :to="{name:'ListarH'}" class="btn btn-warning">Cancelar</router-link>
            </div>
        </form>
        
    </div>

</div>

</div>
            

        </div>
    </div>

</template>


<script>
export default{
    data(){
        return{
            hilo:{}
        }
    },
    methods:{
        agregarHilo(){
            console.log(this.hilo);
            
        var datosEnviar={name_t:this.hilo.name_t}
            console.log(this.hilo);

        fetch('http://localhost/vuedata/connection.php?insertar_t=1',{
            method:"POST",
            body:JSON.stringify(datosEnviar)
        })
            .then(respuesta=>respuesta.json())
            .then((datosRes=>{
                console.log(datosRes);
                window.location.href="hilos"

            }))
        }
    }
}
</script>

<style>

#p_cuerpo {
    color:whitesmoke;
}

</style>
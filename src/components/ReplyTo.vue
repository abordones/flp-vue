<template>
    <div>
        <div>

            <div class="container">

<div class="card">
    <div class="card-header">
        Responder
    </div>
    <div class="card-body"> 

        <form v-on:submit.prevent="agregarResp">
            
            <div class="form-group">
                <label for="nombre">Respuesta:</label>
                <input type="text"
                    class="form-control" required name="titulo" v-model="contesta.response" id="titulo" aria-describedby="helpId" placeholder="Saludos...">
                <small id="helpId" class="form-text text-muted">Escribe tu comentario aquí</small>                 
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
                <router-link :to="{name:'ListarR'}" class="btn btn-warning">Cancelar</router-link>
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
            contesta:{}
        }
    },
    methods:{
        agregarResp(){
            console.log(this.contesta);
        var datosEnviar={response:this.contesta.response}

        fetch('http://localhost/vuedata/connection.php?insertar_r=1',{
            method:"POST",
            body:JSON.stringify(datosEnviar)
        })

            .then(respuesta=>respuesta.json())
            .then((datosRes=>{
                console.log(datosRes);
                window.location.href='respuestas'
                

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
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

            <div class="form-group">
                <label for="">ID del Autor:</label>
                <input type="number" 
                            min="1" max="1000000000" required class="form-control" name="idu" id="idu" v-model="contesta.id_u" aria-describedby="helpId" placeholder="">
                <small id="helpId" class="form-text text-muted">ID</small>                                         
            </div>

            <div class="form-group">
                <label for="">ID del Post:</label>
                <input type="number" 
                            min="1" max="1000000000" required class="form-control" name="idp" id="idp" v-model="contesta.id_p" aria-describedby="helpId" placeholder=" ">
                <small id="helpId" class="form-text text-muted">ID</small>                                         
            </div>

            <div class="form-group">
                <label for="">ID del Hilo:</label>
                <input type="number" 
                            min="1" max="1000000000" required class="form-control" name="idt" id="idt" v-model="contesta.id_t" aria-describedby="helpId" placeholder=" ">
                <small id="helpId" class="form-text text-muted">ID</small>                                         
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
        var datosEnviar={response:this.contesta.response, id_u:this.contesta.id_u, id_p:this.contesta.id_p, id_t:this.contesta.id_t}

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
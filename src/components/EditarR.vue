<template>
    <div>
        <div>

            <div class="container">

                <div class="card">
                    <div class="card-header">
                     Cambiar Respuesta
                    </div>
                    <div class="card-body"> 

                        <form v-on:submit.prevent="actualizarResp">
                    
                            <div class="form-group">
                                <label for="nombre">Respuesta:</label>
                                <input type="text"
                                    class="form-control" required name="titulo" v-model="contesta.response" id="titulo" aria-describedby="helpId" placeholder="Título">
                                <small id="helpId" class="form-text text-muted">Escribe tu comentario</small>                 
                            </div>
                            <div id="p_cuerpo">
                                .
                            </div>
                            <div id="p_cuerpo">
                                .
                            </div>

                            <div class="btn-group" role="group" aria-label="">
                                <button type="submit" class="btn btn-success">Modificar</button>
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
    created:function(){
        this.obtenerID();
    },
    methods:{
        obtenerID(){

            console.log(this.$route.params.id);
            fetch("http://localhost/vuedata/connection.php?consultar_t="+this.$route.params.id)
            .then((respuesta) => respuesta.json())
            .then((datosRespuesta) => {
                 console.log(datosRespuesta);
                 this.contesta=datosRespuesta[0];


            })
        .catch(console.log);
        
        }, actualizarPost(){
            console.log(this.publicacion);
                var datosEnviar={id_r:this.$route.params.id, response:this.contesta.response}

            fetch('http://localhost/vuedata/connection.php?update_r='+this.$route.params.id,{
                method:"POST",
                body:JSON.stringify(datosEnviar)
            })
            .then(respuesta=>respuesta.json())
            .then((datosRespuestas=>{
                console.log(datosRespuestas);
                window.location.href='../respuesta'


            }))
        }
    }
}
</script>
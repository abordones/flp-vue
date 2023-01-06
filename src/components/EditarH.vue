<template>
    <div>
        <div>

            <div class="container">

                <div class="card">
                    <div class="card-header">
                     Renombrar Hilo
                    </div>
                    <div class="card-body"> 

                        <form v-on:submit.prevent="renombrarHilo">
                    
                            <div class="form-group">
                                <label for="nombre">Título:</label>
                                <input type="text"
                                    class="form-control" required name="titulo" v-model="hilo.NAME_T" id="titulo" aria-describedby="helpId" placeholder="Título">
                                <small id="helpId" class="form-text text-muted">Escribe el titulo del Hilo</small>                 
                            </div>
                            
                            <div id="p_cuerpo">
                                .
                            </div>
                            <div id="p_cuerpo">
                                .
                            </div>
                            <div class="btn-group" role="group" aria-label="">
                                <button type="submit" class="btn btn-success">Cambiar</button>
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
                 this.hilo=datosRespuesta[0];


            })
        .catch(console.log);
        
        }, renombrarHilo(){
            console.log(this.hilo);
                var datosEnviar={id_t:this.$route.params.id, name_t:this.hilo.NAME_T}

            fetch('http://localhost/vuedata/connection.php?update_t='+this.$route.params.id,{
                method:"POST",
                body:JSON.stringify(datosEnviar)
            })
                .then(respuesta=>respuesta.json())
                .then((datosRespuestas=>{
                    console.log(datosRespuestas);
                    window.location.href='../hilos'

            }))
        }
    }
}
</script>
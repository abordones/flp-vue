<template>
    <div>
        <div>

            <div class="container">

                <div class="card">
                    <div class="card-header">
                     Actualizar Post
                    </div>
                    <div class="card-body"> 

                        <form v-on:submit.prevent="actualizarPost">
                    
                            <div class="form-group">
                                <label for="nombre">Título:</label>
                                <input type="text"
                                    class="form-control" required name="titulo" v-model="publicacion.TITLE" id="titulo" aria-describedby="helpId" placeholder="Título">
                                <small id="helpId" class="form-text text-muted">Escribe el titulo de la Publicación</small>                 
                            </div>
                            <div id="p_cuerpo">
                                .
                            </div>
                            <div id="p_cuerpo">
                                .
                            </div>
                            <div class="form-group">
                                <label for="">Publicación:</label>
                                <input type="text" 
                                    class="form-control" required name="publicacion" id="publicacion" v-model="publicacion.POST" aria-describedby="helpId" placeholder="Hola a todos... ">
                                <small id="helpId" class="form-text text-muted">Escribe el texto aquí</small>                                         
                            </div>

                            <div class="btn-group" role="group" aria-label="">
                                <button type="submit" class="btn btn-success">Modificar</button>
                                <span style="color: white">||</span>
                                <router-link :to="{name:'ListarP'}" class="btn btn-warning">Cancelar</router-link>
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
            publicacion:{}
        }
    },
    created:function(){
        this.obtenerID();
    },
    methods:{
        obtenerID(){

            console.log(this.$route.params.id);
            fetch("http://localhost/vuedata/connection.php?consultar_p="+this.$route.params.id)
            .then((respuesta) => respuesta.json())
            .then((datosRespuesta) => {
                 console.log(datosRespuesta);
                 this.publicacion=datosRespuesta[0];


            })
        .catch(console.log);
        
        }, actualizarPost(){
            console.log(this.publicacion);
                var datosEnviar={id_p:this.$route.params.id, post:this.publicacion.POST, title:this.publicacion.TITLE}

            fetch('http://localhost/vuedata/connection.php?update_p='+this.$route.params.id,{
                method:"POST",
                body:JSON.stringify(datosEnviar)
            })
            .then(respuesta=>respuesta.json())
            .then((datosRespuestas=>{
                console.log(datosRespuestas);
                window.location.href='../publicaciones'


            }))
        }
    }
}
</script>
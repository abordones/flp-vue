<template>
    <div>
        <div>

            <div class="container">

<div class="card">
    <div class="card-header">
        Crear Post
    </div>
    <div class="card-body"> 

        <form v-on:submit.prevent="agregarPost">
            
            <div class="form-group">
                <label for="nombre">Título:</label>
                <input type="text"
                    class="form-control" required name="titulo" v-model="publicacion.title" id="titulo" aria-describedby="helpId" placeholder="Título">
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
                    class="form-control" required name="publicacion" id="publicacion" v-model="publicacion.post" aria-describedby="helpId" placeholder="Hola a todos... ">
                <small id="helpId" class="form-text text-muted">Escribe el texto aquí</small>                                         
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
                            min="1" max="1000000000" required class="form-control" name="idu" id="idu" v-model="publicacion.id_u" aria-describedby="helpId" placeholder="">
                <small id="helpId" class="form-text text-muted">ID</small>                                         
            </div>

            <div class="form-group">
                <label for="">ID del Hilo:</label>
                <input type="number" 
                            min="1" max="1000000000" required class="form-control" name="idt" id="idt" v-model="publicacion.id_t" aria-describedby="helpId" placeholder=" ">
                <small id="helpId" class="form-text text-muted">ID</small>                                         
            </div>


            <div class="btn-group" role="group" aria-label="">
                <button type="submit" class="btn btn-success">Subir</button>
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
    methods:{
        agregarPost(){
            console.log(this.publicacion);
        var datosEnviar={title:this.publicacion.title, post:this.publicacion.post, id_u:this.publicacion.id_u, id_t:this.publicacion.id_t}

        fetch('http://localhost/vuedata/connection.php?insertar_p=1',{
            method:"POST",
            body:JSON.stringify(datosEnviar)
        })

            .then(respuesta=>respuesta.json())
            .then((datosRes=>{
                console.log(datosRes);
                window.location.href='publicaciones'
                

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
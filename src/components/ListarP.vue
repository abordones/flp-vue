<template>
    <div>

        <div class="container" id="contenedor">
            <div class="card">
                <div class="card-header">
                    Todos los Posts
                </div>
                <div class="card-body">
                    
                    <table class="table">
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>Título</th>
                                <th>Post</th>
                                <th>Fecha de publicación</th>
                                <th>Hilo</th>
                                <th>Autor</th>
                                <th>Acciones</th>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr v-for="publicacion in POSTS" v-bind:key="publicacion.ID_P">
                                <td> {{ publicacion.ID_P }} </td>
                                <th> {{ publicacion.TITLE }} </th>
                                <td align="left"> {{ publicacion.POST }} </td>
                                <td>  {{ publicacion.DATE_P }}</td>
                                <td>  {{ publicacion.ID_T }}</td>
                                <td>  {{ publicacion.ID_U }}</td>
                                <div class="btn-gruop" role="group" aria-label="">
                                        <router-link :to="{name: 'EditarP', params:{id:publicacion.ID_P}}" class="btn btn-success">Editar</router-link><span style="color:white"> | </span>
                                    
                                        <button type="button" v-on:click="borrarPost(publicacion.ID_P)" class="btn btn-outline-danger">Borrar</button>

                                    </div>
                            </tr>
                        </tbody>


                    </table>
                </div>

            </div>

        </div>
        
        <div>-----</div>
            
            <div class="btn-group" role="group" aria-label="">
                <router-link :to="{name:'PostC'}" class="btn btn-success">
                    <FONT SIZE=5><b>Subir Post</b></FONT>
                </router-link>
            </div>

            <div>
                -----
            </div>

            <div>
                -----
            </div>

            <div id="u_cuerpo">
                <FONT SIZE=5>
                Aqui puedes ver todos los Posts
                </font>
            </div>

    
    
    </div>
</template>

<script>
export default{

    data() {
        return{
           POSTS:[]
        }
    },

    created: function () {
        this.consultarPosts();
    },
    methods: {
        consultarPosts() {
            fetch("http://localhost/vuedata/connection.php?mostrar_p=1")
                .then((respuesta) => respuesta.json())
                .then((datosRespuesta) => {
                console.log(datosRespuesta);
                this.POSTS = [];
                if (typeof datosRespuesta[0].success === "undefined") {
                    this.POSTS = datosRespuesta;
                }
            })
        .catch(console.log);
        },
        borrarPost(ID_P){
            fetch('http://localhost/vuedata/connection.php?borrar_p='+ID_P)
            .then((respuesta) => respuesta.json())
            .then((datosRespuesta) => {
                console.log(datosRespuesta)
                window.location.href="/publicaciones"
            }).catch(console.log);
            
            console.log(ID_P)
        }
    }
}
</script>

<style>

#u_cuerpo {
    color:whitesmoke;
}

#linea{
    background-color: #000000;
}

</style>

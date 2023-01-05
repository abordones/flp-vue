<template>
    <div>
        El kiwi es gay

        <div class="container">
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
                                <th>Acciones</th>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr v-for="publicacion in posts" v-bind:key="publicacion.id_p">
                                <td> {{ publicacion.id_p }} </td>
                                <th> {{ publicacion.title }} </th>
                                <td align="left"> {{ publicacion.post }} </td>
                                <td>  {{ publicacion.date_p }}</td>
                                <div class="btn-gruop" role="group" aria-label="">
                                        <router-link :to="{name: 'EditarP', params:{id:publicacion.id_p}}" class="btn btn-success">Editar</router-link><span style="color:white"> | </span>
                                    
                                        <button type="button" v-on:click="borrarPost(publicacion.id_p)" class="btn btn-outline-danger">Borrar</button>

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
            posts:[]
        }
    },

    created: function () {
        this.consultarPosts();
    },
    methods: {
        consultarPosts() {
            fetch("http://localhost/vuedata/selectpost.php")
                .then((respuesta) => respuesta.json())
                .then((datosRespuesta) => {
                console.log(datosRespuesta);
                this.posts = [];
                if (typeof datosRespuesta[0].success === "undefined") {
                    this.posts = datosRespuesta;
                }
            })
        .catch(console.log);
        },
        borrarPost(id_p){
            fetch('http://localhost/vuedata/connection.php?borrar_p='+id_p)
            .then((respuesta) => respuesta.json())
            .then((datosRespuesta) => {
                console.log(datosRespuesta)
                window.location.href="/publicaciones"
            }).catch(console.log);
            
            console.log(id_p)
        }
    }
}
</script>

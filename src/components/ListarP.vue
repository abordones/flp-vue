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
                                <th> {{ publicacion.p_name }} </th>
                                <td align="left"> {{ publicacion.post }} </td>
                                <td>  {{ publicacion.date_p }}</td>
                                <td>

                <a name="" class="btn btn-primary" href="a" role="button">Editar</a>
                <a name="" class="btn btn-primary" href="a" role="button">Borrar</a>
                                
                                </td>
                            </tr>
                        </tbody>


                    </table>
                </div>

            </div>

        </div>
        
        ----
    
    
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
    }
}
</script>

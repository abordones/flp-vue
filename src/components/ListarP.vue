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
                        <thread>
                            <tbody>
                                <th>ID</th>
                                <th>Creado por</th>
                                <td>Hilo</td>
                                <th>Acciones</th>
                                <td>Correo</td>

                            </tbody>
                        </thread>
                        <tbody>

                            <tr v-for="publicacion in posts" v-bind:key="publicacion.id_p">
                                <td> {{ publicacion.id_p }} </td>
                                <td> {{ publicacion.post }} </td>
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
        
        <div v-for="publicacion in posts" v-bind:key="publicacion.id">
            <div> {{ publicacion.id }} </div>
            <div> {{ publicacion.post }}</div>
            <div> {{ publicacion.active }}</div>

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
            fetch("http://localhost/vuedata/crudusereditar.php")
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

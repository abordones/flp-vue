<template>
    <div>
        El kiwi es gay

        <div>
            <div class="container">
                <div class="card">
                    <div class="card-header">
                        Usuarios activos
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>Respuesta</th>
                                    <th>Fecha</th>
                                    <th>Acciones</th>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr v-for="reply in replies" v-bind:key="reply.id_r">
                                    <td> {{ reply.id_r }} </td>
                                    <td> {{ reply.response }} </td>
                                    <td> {{ reply.date_r }} </td>
                                    <td>

                                    <div class="btn-gruop" role="group" aria-label="">
                                        <router-link :to="{name: 'EditarR', params:{id:reply.id_r}}" class="btn btn-success">Editar</router-link><span style="color:white"> | </span>
                                    
                                        <button type="button" v-on:click="borrarRespuesta(reply.id_r)" class="btn btn-outline-danger">Borrar</button>

                                    </div>
                                    
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>

            <div>-----</div>
            
            <div class="btn-group" role="group" aria-label="">
                <router-link :to="{name:'ReplyTo'}" class="btn btn-success">
                    <FONT SIZE=5><b>Responder a...</b></FONT>
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
                Aqui puedes ver todos las Respuestas hechas a las Publicaciones
                </font>
            </div>

        </div>
    
    </div>
</template>

<script>
export default{

    data() {
        return{
            replies:[]
        }
    },

    created: function () {
        this.consultarRespuestas();
    },
    methods: {
        consultarRespuestas() {
            fetch("http://localhost/vuedata/connection.php?mostrar_r=1")
                .then((respuesta) => respuesta.json())
                .then((datosRespuesta) => {
                console.log(datosRespuesta);
                this.replies = [];
                if (typeof datosRespuesta[0].success === "undefined") {
                    this.replies = datosRespuesta;
                }
            })
        .catch(console.log);
        },

        borrarRespuesta(id_r){
            fetch('http://localhost/vuedata/connection.php?borrar_r='+id_r)
            .then((respuesta) => respuesta.json())
            .then((datosRespuesta) => {
                console.log(datosRespuesta)
                window.location.href="/respuestas"
            
            }).catch(console.log);
            

            console.log(id_r)
        }
    }
}
</script>

<style>

#u_cuerpo {
    color:whitesmoke;
}

</style>
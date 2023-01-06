<template>
    <div>

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
                                    <th>Autor</th>
                                    <th>Respuesta a</th>
                                    <th>Hilo Asociado</th>
                                    <th>Acciones</th>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr v-for="reply in REPLIES" v-bind:key="reply.ID_R">
                                    <td> {{ reply.ID_R }} </td>
                                    <td> {{ reply.RESPONSE }} </td>
                                    <td> {{ reply.DATE_R }} </td>
                                    <td> {{ reply.ID_U}} </td>
                                    <td> {{ reply.ID_P }} </td>
                                    <td> {{ reply.ID_T }} </td>
                                    <td>

                                    <div class="btn-gruop" role="group" aria-label="">
                                        <router-link :to="{name: 'EditarR', params:{id:reply.ID_R}}" class="btn btn-success">Editar</router-link><span style="color:white"> | </span>
                                    
                                        <button type="button" v-on:click="borrarRespuesta(reply.ID_R)" class="btn btn-outline-danger">Borrar</button>

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
            REPLIES:[]
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
                this.REPLIES = [];
                if (typeof datosRespuesta[0].success === "undefined") {
                    this.REPLIES = datosRespuesta;
                }
            })
        .catch(console.log);
        },

        borrarRespuesta(ID_R){
            fetch('http://localhost/vuedata/connection.php?borrar_r='+ID_R)
            .then((respuesta) => respuesta.json())
            .then((datosRespuesta) => {
                console.log(datosRespuesta)
                window.location.href="/respuestas"
            
            }).catch(console.log);
            

            console.log(ID_R)
        }
    }
}
</script>

<style>

#u_cuerpo {
    color:whitesmoke;
}

</style>
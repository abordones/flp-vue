<template>
    <div>
        El kiwi es gay

        <div class="container">
            <div class="card">
                <div class="card-header">
                    Hilos
                </div>
                <div class="card-body">
                    
                    <table class="table">
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>Autor</th>
                                <th>Título</th>
                                <th>Fecha de publicación</th>
                                <th>Acciones</th>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr v-for="hilo in threads" v-bind:key="hilo.id_t">
                                <td> {{ hilo.id_t }} </td>
                                <th> {{ hilo.id_u }} </th>
                                <th> {{ hilo.name_t }} </th>
                                <td>  {{ hilo.date_t }}</td>
                                <div class="btn-gruop" role="group" aria-label="">
                                        <router-link :to="{name: 'EditarH', params:{id:hilo.id_t}}" class="btn btn-success">Editar</router-link><span style="color:white"> | </span>
                                    
                                        <button type="button" v-on:click="borrarHilo(hilo.id_t)" class="btn btn-outline-danger">Borrar</button>

                                    </div>
                            </tr>
                        </tbody>


                    </table>
                </div>

            </div>

        </div>
        
        <div>-----</div>
            
            <div class="btn-group" role="group" aria-label="">
                <router-link :to="{name:'NuevoHilo'}" class="btn btn-success">
                    <FONT SIZE=5><b>Agregar Hilo</b></FONT>
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
                Aqui puedes ver los Hilos creados
                </font>
            </div>

    
    
    </div>
</template>

<script>
export default{

    data() {
        return{
            threads:[]
        }
    },

    created: function () {
        this.consultarHilos();
    },
    methods: {
        consultarHilos() {
            fetch("http://localhost/vuedata/selectthread.php")
                .then((respuesta) => respuesta.json())
                .then((datosRespuesta) => {
                console.log(datosRespuesta);
                this.threads = [];
                if (typeof datosRespuesta[0].success === "undefined") {
                    this.threads = datosRespuesta;
                }
            })
        .catch(console.log);
        },
        borrarHilo(id_t){
            fetch('http://localhost/vuedata/connection.php?borrar_t='+id_t)
            .then((respuesta) => respuesta.json())
            .then((datosRespuesta) => {
                console.log(datosRespuesta)
                window.location.href="/hilos"
            }).catch(console.log);
            
            console.log(id_t)
        }
    }
}
</script>

<template>
    <div>

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
                                <th>Título</th>
                                <th>Fecha de publicación</th>
                                <th>Acciones</th>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr v-for="hilo in THREADS" v-bind:key="hilo.ID_T">
                                <td> {{ hilo.ID_T }} </td>
                                <th> {{ hilo.NAME_T }} </th>
                                <td>  {{ hilo.DATE_T }}</td>
                                <div class="btn-gruop" role="group" aria-label="">
                                        <router-link :to="{name: 'EditarH', params:{id:hilo.ID_T}}" class="btn btn-success">Editar</router-link><span style="color:white"> | </span>
                                    
                                        <button type="button" v-on:click="borrarHilo(hilo.ID_T)" class="btn btn-outline-danger">Borrar</button>

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
            THREADS:[]
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
                this.THREADS = [];
                if (typeof datosRespuesta[0].success === "undefined") {
                    this.THREADS = datosRespuesta;
                }
            })
        .catch(console.log);
        },
        borrarHilo(ID_T){
            fetch('http://localhost/vuedata/connection.php?borrar_t='+ID_T)
            .then((respuesta) => respuesta.json())
            .then((datosRespuesta) => {
                console.log(datosRespuesta)
                window.location.href="/hilos"
            }).catch(console.log);
            
            console.log(ID_T)
        }
    }
}
</script>

<style>

body {
  background: url(https://cdn.discordapp.com/attachments/324358291561906186/1060850394709897226/bginformatico.jpg) no-repeat;
  
}
</style>

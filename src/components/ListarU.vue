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
                                    <th>nombre</th>
                                    <th>Correo</th>
                                    <th>Acciones</th>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr v-for="user in users" v-bind:key="user.id">
                                    <td> {{ user.id }} </td>
                                    <td> {{ user.name }} </td>
                                    <td>  {{ user.email }}</td>
                                    <td>

                                    <div class="btn-gruop" role="group" aria-label="">
                                        <router-link :to="{name: 'Editar', params:{id:user.id}}" class="btn btn-success">Editar</router-link><span style="color:white"> | </span>
                                    
                                        <button type="button" v-on:click="borrarUsuario(user.id)" class="btn btn-outline-danger">Borrar</button>

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
                <router-link :to="{name:'Crear'}" class="btn btn-success">
                    <FONT SIZE=5><b>Agregar</b></FONT>
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
                Aqui puedes ver los Usuarios registrados
                </font>
            </div>

        </div>
    
    </div>
</template>

<script>
export default{

    data() {
        return{
            users:[]
        }
    },

    created: function () {
        this.consultarUsuarios();
    },
    methods: {
        consultarUsuarios() {
            fetch("http://localhost/vuedata/connection.php?mostrar_u=1")
                .then((respuesta) => respuesta.json())
                .then((datosRespuesta) => {
                console.log(datosRespuesta);
                this.users = [];
                if (typeof datosRespuesta[0].success === "undefined") {
                    this.users = datosRespuesta;
                }
            })
        .catch(console.log);
        },

        borrarUsuario(id){
            fetch('http://localhost/vuedata/connection.php?borrar_u='+id)
            .then((respuesta) => respuesta.json())
            .then((datosRespuesta) => {
                console.log(datosRespuesta)
                window.location.href="/usuarios"
            
            }).catch(console.log);
            

            console.log(id)
        }
    }
}
</script>

<style>

#u_cuerpo {
    color:whitesmoke;
}

</style>
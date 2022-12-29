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

                    <a name="" class="btn btn-primary" href="a" role="button">Editar</a>
                    <a name="" class="btn btn-primary" href="a" role="button">Borrar</a>
                                    
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>

            <div>
                -----
            </div>

            <div>
                -----
            </div>

            <div id="u_cuerpo">
                <FONT SIZE=5>
                <b>Aqui puedes ver los Usuarios registrado</b>
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
            fetch("http://localhost/vuedata/selecttodo.php")
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
    }
}
</script>

<style>

#u_cuerpo {
    color:whitesmoke;
}

</style>
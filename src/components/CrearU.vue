<template>
    <div class="container">

        <div class="card">
            <div class="card-header">
                Agregar Usuarios
            </div>
            <div class="card-body"> 

                <form v-on:submit.prevent="agregarRegistro">
                    
                    <div class="form-group">
                        <label for="nombre">Nombre:</label>
                        <input type="text"
                            class="form-control" required name="nombre" v-model="usuario.name" id="nombre" aria-describedby="helpId" placeholder="Nombre">
                        <small id="helpId" class="form-text text-muted">Escribe tu nombre de Usuario</small>                 
                    </div>
                    <div class="form-group">
                        <label for="">Correo:</label>
                        <input type="text" 
                            class="form-control" required name="correo" id="correo" v-model="usuario.email" aria-describedby="helpId" placeholder="Correo">
                        <small id="helpId" class="form-text text-muted">Escribe tu Correo</small>                                         
                    </div>
                    <div class="form-group">
                        <label for="">Contraseña:</label>
                        <input type="password" 
                            class="form-control" required name="contraseña" id="contraseña" v-model="usuario.password" aria-describedby="helpId" placeholder="Contraseña">
                        <small id="helpId" class="form-text text-muted">Ingresa una contraseña</small>                                         
                    </div>
                    <div class="form-group">
                        <label for="">RUT:</label>
                        <input type="number" 
                            min="10000000" max="100000000" required class="form-control" name="rut" id="rut" v-model="usuario.rut" aria-describedby="helpId" placeholder="RUT">
                        <small id="helpId" class="form-text text-muted">Escribe tu RUT (sin puntos ni guión)</small>                                         
                    </div>

                    <div class="btn-group" role="group" aria-label="">
                        <button type="submit" class="btn btn-success">Agregar</button>
                        <span style="color: white">||</span>
                        <router-link :to="{name:'Listar'}" class="btn btn-warning">Cancelar</router-link>
                    </div>
                </form>
                
            </div>

        </div>
        
    </div>

</template>


<script>
export default{
    data(){
        return{
            usuario:{}
        }
    },
    methods:{
        agregarRegistro(){
            console.log(this.usuario);
        var datosEnviar={name:this.usuario.name, email:this.usuario.email, password:this.usuario.password, rut:this.usuario.rut}

        fetch('http://localhost/vuedata/connection.php?insertar_u=1',{
            method:"POST",
            body:JSON.stringify(datosEnviar)
        })

            .then(respuesta=>respuesta.json())
            .then((datosRespuestas=>{
                console.log(datosRespuestas);
                window.location.href='listar'

            }))

        }

    }
    
}
</script>

<style scoped>



</style>
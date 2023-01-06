<template>
<div class="container">

    <div class="card">
        <div class="card-header">
            Login
        </div>
        <div class="card-body"> 

            <form v-on:submit.prevent="LogUsuario">
                
                <div class="form-group">
                    <label for="nombre">ID:</label>
                    <input type="text"
                        class="form-control" required name="idu" v-model="usuarios.ID_U" id="idu" aria-describedby="helpId" placeholder="Nombre">
                    <small id="helpId" class="form-text text-muted">Escribe tu ID de usaurio</small>                 
                </div>

                <div class="btn-group" role="group" aria-label="">
                    <button type="submit" class="btn btn-success">Ingresar</button>
                    <span style="color: white">||</span>
                </div>
            </form>
            
        </div>

    </div>

</div>

</template>

<script>
export default{

    created() {
        if(localStorage.getItem('Usuarios')!=null){
            this.items = JSON.parse(localStorage.Users);
        }
    },
    data() {
        return{
            //item:'',
            usuarios:[]
        }
    },
    methods: {
        LogUsuario(){
            localStorage.setItem('Users', JSON.stringify(this.usuarios));
            this.ID_U=''
        }
    }
}
</script>

<style>

#u_cuerpo {
    color:whitesmoke;
}

</style>
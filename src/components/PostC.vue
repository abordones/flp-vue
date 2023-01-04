<template>
    <div>
        <div>
            

        </div>
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
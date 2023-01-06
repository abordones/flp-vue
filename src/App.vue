<template>
  <nav> | 
  
    <router-link to="/usuarios">Usuarios</router-link> | 

    <router-link to="/publicaciones">Publicaciones</router-link> |

    <router-link to="/hilos">Hilos</router-link> |

    <router-link to="/respuestas">Respuestas</router-link> 

  </nav>
  <router-view/>

  
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: url(./assets/fondo-tecnologico.jpg) no-repeat;;
  backdrop-filter: blur(50px);
  background-size: cover ;
  min-height: 100vh;
  padding-bottom: 3em;
  min-height: 100vh;
}

nav {
  padding: 30px;

}

nav a {
  font-weight: bold;
  color: #ffffff;

}

nav a.router-link-exact-active {
  color: #42b983;

}

</style>

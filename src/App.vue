<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    
    <router-link to="/crear">Crear</router-link>
    <router-link to="/editar">Editar</router-link>
    <router-link to="/listar">Listar</router-link>
    <router-link to="/borrar">Borrar</router-link> |

    <router-link to="/publicaciones">Publicaciones</router-link> |

    <router-link to="/dinamico">Prueba</router-link>
    <router-link to="/dinamico2">Prueba 2</router-link>


  </nav>
  <router-view/>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #182a3f;
  min-height: 100vh;
}

nav {
  padding: 30px;

}

nav a {
  font-weight: bold;
  color: #dbdbdb;

}

nav a.router-link-exact-active {
  color: #42b983;

}
</style>

<template>

<Header />

<router-view />
</template>

<script>
import Header from './views/inc/Header.vue'

export default {
  data () {
  return {
    publicPath: process.env.BASE_URL
    }
  },

    components: {
        Header
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

#nav {
    background-color: #e3f2fd;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>

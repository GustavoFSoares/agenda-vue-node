<template>
    <div id="app">
        <nav-bar/>
        <img src="./assets/logo.png">
        <router-view/>
    </div>
</template>

<script>
import NavBar1 from '@/components/NavBar1.vue'
export default {

    name: 'App',
    components: {
        'nav-bar': NavBar1
    }

}
</script>

<style>
      #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /* margin-top: 60px; */
    }
</style>

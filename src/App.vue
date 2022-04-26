<template>
    <v-app class="app">
        <Navbar/>
        <v-main class="container">
            <router-view/>
        </v-main>
        <Footer/>
    </v-app>
</template>

<script>

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default {
    name: 'App',
    components: {Footer, Navbar},
}
</script>

<style lang="scss" scoped>
@import 'css/_variables';

.app {
    display: flex;
    min-height: 100vh;
    background-image: url("./assets/bg-noise.png");
    background-repeat: repeat;
    background-blend-mode: lighten;
    background-color: lighten($color-primary, 51) !important;
}

.container {
    display: flex;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 79px 15px 15px !important;
}


</style>

<template>
    <v-app class="app">
        <Navbar/>
        <v-main class="app container">
            <router-view/>
        </v-main>
    </v-app>
</template>

<script>

import Navbar from '@/components/Navbar';

export default {
    name: 'App',
    components: {Navbar},
}
</script>

<style lang="scss" scoped>

.app {
    display: flex;
    height: 100%;
    background-color: #fafafa !important;
}

.container {
    display: flex;
    height: 100%;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 79px 15px 15px !important;
}


</style>

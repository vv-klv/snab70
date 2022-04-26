<template>
    <v-app-bar class="navbar">
        <router-link to="/">
            <img
                class="navbar__logo"
                :src="require('@/assets/logo-3.svg')"
                alt="Б/Улавка logo"
            >
        </router-link>
        <div class="navbar__links d-none d-md-flex">
            <v-btn class="navbar__link" to="/">
                Прокат инструментов
            </v-btn>
            <v-btn class="navbar__link" to="/contacts">
                Контакты, схема проезда
            </v-btn>
            <v-btn class="navbar__link" to="/rules">
                Правила
            </v-btn>
        </div>
        <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
            class="navbar__burger d-md-none"
        />
    </v-app-bar>
    <Sidebar :drawer="drawer"/>
</template>

<script>
import Sidebar from '@/components/Sidebar';
export default {
    name: "Navbar",
    components: {Sidebar},
    data: () => ({
        drawer: false,
    }),
}
</script>

<style lang="scss" scoped>
@import '../css/_variables';

.navbar {
    display: flex;
    padding: 0 $gap-md;
    background-color: $color-primary;

    &__logo {
        display: block;
        height: 60px;
        margin: auto 0 auto $gap-md;
        padding: 1px 0;
    }

    &__links {
        display: flex;
        margin-left: auto;
        gap: $gap-sm;
    }

    &__burger {
        margin-left: auto;
        color: #fff;
    }

    &__link {
        height: 64px;
        color: #fff;

        &:hover {
            background-color: lighten($color-primary, 2);
        }
    }
}
</style>
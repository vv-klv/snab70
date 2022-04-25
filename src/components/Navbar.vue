<template>
    <v-app-bar class="navbar">
        <router-link to="/rent">
            <img
                :src="require('@/assets/logo-3.svg')"
                class="navbar__logo"
                alt="SASS logo"
            >
        </router-link>
        <div class="navbar__btns d-none d-md-flex">
            <v-btn class="navbar__btn" to="/rent">
                Прокат инструментов
            </v-btn>
            <v-btn class="navbar__btn" to="/contacts">
                Контакты, схема проезда
            </v-btn>
            <v-btn class="navbar__btn" to="/rules">
                Правила
            </v-btn>
        </div>
        <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
            class="navbar__burger d-md-none"
        />
    </v-app-bar>
    <NavbarRight :drawer="drawer"/>
</template>

<script>
import NavbarRight from '@/components/NavbarRight';
export default {
    name: "Navbar",
    components: {NavbarRight},
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
    background-color: $secondary-color;

    &__logo {
        display: block;
        height: 60px;
        margin: auto 0;
        padding: 1px 0;
    }

    &__btns {
        display: flex;
        margin-left: auto;
        gap: $gap-sm;
    }

    &__burger {
        margin-left: auto;
        color: #fff;
    }

    &__btn {
        height: 64px;
        color: #fff;

        @media (max-width: 575px) {
            font-size: 12px;
        }
    }
}
</style>
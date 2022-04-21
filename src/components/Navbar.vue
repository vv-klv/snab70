<template>
    <v-app-bar class="navbar" color="#3779aa">
        <router-link to="/rent">
            <img
                :src="require('@/assets/logo-3.svg')"
                class="navbar__logo"
                alt="SASS logo"
            >
        </router-link>
        <div class="navbar__btns">
            <v-btn
                class="navbar__btn"
                @click="$router.push('/rent')"
            >
                Прокат инструментов
            </v-btn>
            <v-btn
                class="navbar__btn"
                @click="$router.push('/contacts')"
            >
                Контакты, схема проезда
            </v-btn>
        </div>
        <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
            class="navbar__burger d-md-none"
        />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" position="right">
        <v-list>
            <v-list-item
                link
                class="nav-item"
                rounded="xl"
                @click="$router.push('/rent')"
            >
                    Прокат инструментов
            </v-list-item>

            <v-list-item
                link
                class="nav-item"
                rounded="xl"
                @click="$router.push('/contacts')"
            >
                    Контакты, схема проезда
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "Navbar",
    data: () => ({
        drawer: false,
    }),
}
</script>

<style lang="scss" scoped>
@import '../css/_variables';

.nav-item:hover {
    background-color: lighten($secondary-color, 45);
}

.navbar {
    display: flex;
    padding: 0 15px;

    &__logo {
        display: block;
        height: 60px;
        margin: auto 0;
        padding: 1px 0;
    }

    &__btns {
        display: flex;
        margin-left: auto;
        gap: $gap-md;

        @media (max-width: 991px) {
            display: none;
        }
    }

    &__burger {
        margin-left: auto;
        color: #fff;
    }

    &__btn {
        background-color: #fff;
        box-shadow: $shadow;

        a {
            color: #000;
        }

        @media (max-width: 575px) {
            font-size: 12px;
        }
    }
}
</style>
<template>
    <v-app-bar class="navbar" color="#c9c9c9">
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
            <v-btn
                class="navbar__btn"
                @click="$router.push('/rent#rules')"
            >
                Правила
            </v-btn>
        </div>
        <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
            class="navbar__burger d-md-none"
        />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" position="right">
        <v-list>
            <v-list-item link>
                <v-list-item-title @click="$router.push('/rent')">
                    Прокат инструментов
                </v-list-item-title>
            </v-list-item>

            <v-list-item link>
                <v-list-item-title @click="$router.push('/contacts')">
                    Контакты, схема проезда
                </v-list-item-title>
            </v-list-item>

            <v-list-item link>
                <v-list-item-title @click="$router.push('/rent#rules')">
                    Правила
                </v-list-item-title>
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
    }

    &__btn {
        background-color: #fff;
        box-shadow: $shadow;

        a {
            color: black;
        }

        @media (max-width: 575px) {
            font-size: 12px;
        }
    }

    @media (max-width: 991px) {

    }
}
</style>
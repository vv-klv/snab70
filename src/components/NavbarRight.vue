<template>
    <v-navigation-drawer v-model="drawer" position="right">
        <v-list>
            <v-list-item
                to="/rent"
                class="nav-item"
                rounded="xl"
            >
                Прокат инструментов
            </v-list-item>

            <v-list-item
                to="/contacts"
                class="nav-item"
                rounded="xl"
            >
                Контакты, схема проезда
            </v-list-item>

            <v-list-item
                to="/rules"
                class="nav-item"
                rounded="xl"
            >
                Правила
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "NavbarRight",
    props: {
        drawer: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../css/_variables';

.nav-item {
    font-weight: 600;
    margin: 0 $gap-sm;

    &:hover {
        background-color: lighten($secondary-color, 45);
    }
}
</style>
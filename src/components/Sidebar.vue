<template>
    <v-navigation-drawer
        class="sidebar"
        v-model="drawer"
        position="right"
        disable-resize-watcher
    >
        <v-list
            class="sidebar__links"
        >
            <v-list-item
                to="/"
                class="sidebar__link"
                rounded="xl"
            >
                Прокат инструментов
            </v-list-item>

            <v-list-item
                to="/contacts"
                class="sidebar__link"
                rounded="xl"
            >
                Контакты, схема проезда
            </v-list-item>

            <v-list-item
                to="/rules"
                class="sidebar__link"
                rounded="xl"
            >
                Правила
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "Sidebar",
    props: {
        drawer: {
            type: Boolean,
            default: true,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../css/_variables';

.v-list-item {
    padding: 8px 16px !important;
}

.sidebar {

    &__link {
        font-weight: 600;
        margin: 0 $gap-sm;

        &:hover {
            background-color: $color-primary--light;
        }
    }
}
</style>
<template>
    <v-expansion-panels class="about">
        <v-expansion-panel>
            <v-expansion-panel-title>
                <h2 class="about__title">О прокате</h2>
                <template v-slot:actions>
                    <v-icon icon="mdi-information-outline" color="#ff7e30"/>
                </template>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="about__text">
                <v-list-item>
                    Для ремонта в квартире, работ на даче, постройки дома, внутренней
                    отделки – у нас есть строительный инструмент для всех видов работ по
                    низким ценам.
                </v-list-item>
                <v-list-item>
                    Прокат инструмента в Томске – отличный и экономичный вариант
                    при проведении разовых или недолгосрочных работ.
                </v-list-item>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
export default {
    name: "About"
}
</script>

<style lang="scss" scoped>
@import '../css/_variables';

.about {
    border-radius: 4px !important;
    overflow: hidden;
    box-shadow: $shadow;

    &__title {
        text-transform: uppercase;
        color: $color-secondary;
        font-size: 1.25rem;
    }

    &__text {
        font-size: $text-sm;
    }
}

.v-expansion-panel-title {
    background-color: $color-secondary--light;

    &:hover, &:hover > * {
        background-color: lighten($color-secondary--light, 1);
    }
    &--active, &--active > * {
        background-color: darken($color-secondary--light, 1);
    }
}

</style>
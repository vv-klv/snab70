<template>
    <v-footer class="footer">
        <v-btn class="footer__link" to="/rent">Аренда</v-btn>
        <v-btn class="footer__link" to="/contacts">
            Контакты и карта
        </v-btn>
        <v-btn class="footer__link" to="/rules">Правила</v-btn>
    </v-footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="scss" scoped>
@import '../css/_variables';

.footer {
    display: flex;
    justify-content: center;
    max-height: 68px;
    gap: $gap-sm;
    padding: $gap-md;
    background-color: darken($secondary-color, 10);

    &__link {
        color: #fff;
        font-weight: 400;
        height: 64px;
        background-color: transparent;
        box-shadow: none;

        @media (max-width: 575px) {
            font-size: 12px;
        }
    }

}
</style>
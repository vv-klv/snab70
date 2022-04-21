<template>
    <v-footer class="footer">
        <v-btn class="footer__link" variant="flat">Аренда</v-btn>
        <v-btn class="footer__link" variant="flat">Контакты и карта</v-btn>
        <v-btn class="footer__link" variant="flat">Аренда</v-btn>
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
    gap: $gap-md;
    padding: $gap-md;
    background-color: darken($secondary-color, 10);

    &__link {
        font-weight: 400;
        color: white;
    }
}
</style>
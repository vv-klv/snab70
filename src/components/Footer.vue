<template>
    <v-footer class="footer">
        <div class="footer__container">
            <div class="footer__links">
                <v-btn class="footer__link" to="/">Аренда</v-btn>
                <v-btn class="footer__link" to="/contacts">
                    Контакты и карта
                </v-btn>
                <v-btn class="footer__link" to="/rules">Правила</v-btn>
            </div>
            <ContactsList class="contacts--inverted"/>
        </div>
    </v-footer>
</template>

<script>
import ContactsList from '@/components/ContactsList';
export default {
    name: "Footer",
    components: {ContactsList}
}
</script>

<style lang="scss" scoped>
@import '../css/_variables';

.footer {
    background-color: darken($color-primary, 10);



    &__container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        padding-bottom: $gap-md;
        gap: $gap-sm;
        max-width: 900px;

        @media (max-width: 767px) {
            flex-wrap: wrap;
        }
    }

    &__links {
        display: flex;
        flex-wrap: wrap;
        @media (max-width: 420px) {
            justify-content: center;
        }
    }

    &__link {
        color: white;
        font-weight: 600;
        background-color: transparent;
        box-shadow: none;

        position: relative;
        padding: 2rem .875rem;

        @media (max-width: 575px) {
            font-size: $text-sm;
        }

        @media (max-width: 420px) {
            padding: 1rem .875rem;
        }

        &:hover {
            background-color: darken($color-primary, 8);
        }
    }

    &__contacts {
        color: white;

        b {
            color: white;
        }
    }

}
</style>
<template>
    <div class="contacts">
        <div class="contacts__item">
            <div>
                <b>Телефон проката инструментов: </b>
                <a href="tel:+73822225304">8 (3822) <b>22-53-04</b></a>
            </div>
            <div>
                <b>Электронная почта: </b>
                <a href="mailto:333212@list.ru">333212@list.ru</a>
            </div>
            <div>
                <b>Адрес:</b>
                г. Томск, пр. Кирова 5, стр. 2
            </div>
        </div>
        <div class="contacts__item">
            <b>Режим работы: </b><br>
            <b>понедельник-пятница</b> 10:00-19:00<br>
            <b>суббота-воскресенье</b> 10:00-18:00
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactsList"
}
</script>

<style lang="scss" scoped>
@import '../css/_variables';

.contacts {
    display: flex;
    justify-content: space-between;
    font-size: 14px;

    @media (max-width: 767px) {
        flex-direction: column;
    }

    &__item + &__item {
        margin: 0 auto 0 $gap-lg;

        @media (max-width: 767px) {
            margin: 0;
        }
    }

    a {
        color: inherit;

        &:hover {
            color: $color-primary;
            text-decoration: underline;
        }
    }

    b {
        color: darken($color-primary, 10);
    }

    &--inverted {
        color: $color-primary--light;

        a:hover {
                color: white;
                text-decoration: underline;
        }

        b {
            color: white;
        }
    }
}
</style>
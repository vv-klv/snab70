<template>
    <h1 class="contacts__title">
        Контактная информация и схема проезда
    </h1>
    <div class="contacts__list">
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
    <iframe
        class="contacts__map"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A3def23f5b11cc0221e46b700be044fa92f80109f2e3fa18bb2c7318b42556dff&amp;source=constructor"
        height="500"
        frameborder="0"
    />
</template>

<script>
export default {
    name: "ContactsAndMapView"
}
</script>

<style lang="scss" scoped>
@import '../css/_variables';
a {
    color: #000;
    
    &:hover {
        color: $color-primary;
        text-decoration: underline;
    }
}

.contacts {

    &__title {
        text-align: center;
        color: $color-secondary;

        @media (max-width: 575px) {
            font-size: 24px;
        }
    }

    &__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 600px;
        margin: $gap-md;
        font-size: 14px;

        b {
            color: darken($color-primary, 10);
        }
    }

    &__map {
        margin-top: $gap-sm;
        width: 100%;
        border-radius: 6px;
        box-shadow: $shadow;
    }
}
</style>
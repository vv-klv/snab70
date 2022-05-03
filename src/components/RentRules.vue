<template>
    <v-expansion-panels
        class="rules"
        v-model="expand"
        variant="accordion"
    >
        <v-expansion-panel >
            <v-expansion-panel-title class="rules__title">
                На что следует обратить внимание
                <template v-slot:actions>
                    <v-icon icon="mdi-exclamation-thick"/>
                </template>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="rules__text">
                <v-list-item>
                    Обратите внимание, что бензоинструмент бывает с 2-х и 4-х
                    тактными двигателями! 4-х тактные двигатели следует
                    заправлять обычным бензином (АИ-92). Для 2-х тактных придется
                    приготовить смесь, используя масло для двухтактных
                    двигателей. Готовую смесь вы можете приобрести в пункте проката.
                </v-list-item>
                <v-list-item>
                    Буры для перфораторов, пильные цепи, отрезные диски, леска
                    для триммеров, электроды - все это является расходным
                    материалом и приобретается в пункте проката отдельно.
                </v-list-item>
                <v-list-item>
                    В случае появления у инструмента или оснастки дефектов,
                    возникших в процессе эксплуатации Клиентом, имущество
                    передается в мастерскую для выяснения причины появления
                    дефектов. Если дефекты возникли из-за естественного износа
                    деталей, то ремонт производится за счёт Арендодателя.
                </v-list-item>
                <v-list-item>
                    Если причиной появления дефектов явилось небрежное отношение
                    к имуществу проката со стороны Арендатора или нарушение
                    правил эксплуатации инструмента, то ремонт производится за
                    счёт Арендатора.
                </v-list-item>
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title class="rules__title">
                Правила проката инструмента и порядок действий для физических
                лиц
                <template v-slot:actions>
                    <v-icon icon="mdi-account"/>
                </template>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="rules__text">
                <v-list>
                    <v-list-item class="v-list-item">
                        Выбрать необходимое оборудование на сайте и оформить заявку
                        по телефону. При аренде инструмента физическими лицами предусмотрен
                        небольшой денежный залог для лиц, имеющих регистрацию за пределами
                        Томской области. Размер залога указан в карточке каждого товара.
                        Минимальный срок аренды инструмента - 1 cутки.
                    </v-list-item>
                    <v-list-item class="v-list-item">
                        Приехать к нам в офис, заключить договор проката инструмента,
                        оплатить весь срок предполагаемой аренды, и получить
                        инструмент.
                    </v-list-item>
                    <v-list-item class="v-list-item">
                        После завершения срока аренды сдать инструмент на наш склад.
                        Сдаваемый инструмент должен быть чистым.
                    </v-list-item>
                    <v-list-item class="v-list-item">
                        Получить обратно внесенный денежный залог, если он был
                        предусмотрен.
                    </v-list-item>
                </v-list>

            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title class="rules__title">
                Правила проката инструмента и порядок действий для юридических
                лиц
                <template v-slot:actions>
                    <v-icon icon="mdi-briefcase"/>
                </template>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="rules__text">
                <v-list>
                    <v-list-item>
                        Выбрать необходимое оборудование на сайте и оформить
                        заявку по телефону. Денежный залог не предусмотрен.
                        Минимальный срок аренды инструмента - 1 сутки.
                    </v-list-item>
                    <v-list-item>
                        Подписать высланный нами договор и оплатить
                        выставленный счет.
                    </v-list-item>
                    <v-list-item>
                        Приехать с доверенностью, оригиналом подписанного
                        договора, и получить оборудование с нашего склада.
                    </v-list-item>
                    <v-list-item>
                        После завершения срока аренды сдать оборудование на
                        наш склад.
                    </v-list-item>
                    <v-list-item>
                        При работе с юридическими лицами мы предоставляем все
                        необходимые бухгалтерские документы.
                    </v-list-item>
                </v-list>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels >
</template>

<script>
export default {
    name: "RentRules",
    props: {
        isExpanded: {
            type: Array
        }
    },
    computed: {
        expand() {
            return this.$props.isExpanded;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../css/_variables';

.rules {

    &__title {
        font-size: 1rem;
        text-align: left;
        height: $text-md * 1.5;

        @media (max-width: 575px) {
            font-size: $text-sm;
        }
    }

    &__text {
        font-size: $text-sm;
    }
}

.v-expansion-panel-title {
    background-color: $color-primary--light;

    &:hover, &:hover > * {
        background-color: lighten($color-primary--light, 2);
    }

    &--active, &--active > * {
        background-color: darken($color-primary--light, 2);
    }
}
</style>
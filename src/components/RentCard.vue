<template>
    <v-card class="card">
        <div class="card__wrapper">
            <h3 class="card__title">{{ item.title }}</h3>
            <ul class="card__specs">
                <li
                    v-for="(spec, j) in item.specs"
                    :key="j"
                >
                    <b>{{ spec.spec }}</b> — {{ spec.value }}
                </li>
            </ul>
            <i class="card__extra">{{ item.extra }}</i>
            <h4 class="card__price">
                Стоимость проката (сутки): {{ item.price }} руб.
            </h4>
        </div>
        <div class="card__image-container">
            <img
                :src="cardImg(item.imgsrc)"
                class="card__image"
                :alt="item.title"
            >
        </div>
    </v-card>
</template>

<script>
export default {
    name: "RentCard",
    props: {
        item: {
            type: [Array, Object],
            required: true
        }
    },
    methods: {
        cardImg: function(path) {
            return require("@/" + path);
        },
    },
}
</script>

<style lang="scss" scoped>
@import "../css/_variables";

.card {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    min-width: 210px;

    @media (max-width: 575px) {
        flex-direction: column-reverse;
    }

    &__wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-right: auto;
        width: 100%;
        max-width: 400px;
    }

    &__title {
        font-weight: bold;
        line-height: 1.2;
        text-transform: uppercase;
        color: $color-secondary;
    }

    &__specs {
        margin-top: $gap-sm;
        font-size: $text-sm;
    }

    &__extra {
        margin-bottom: auto;
        font-size: $text-sm;
    }

    &__price {
        margin-top: $gap-sm;
        color: $color-primary;
    }

    &__image-container {
        display: flex;
        height: 200px;
        width: 280px;
        margin: auto 0 auto $gap-lg;

        @media (max-width: 575px) {
            margin: 0 auto $gap-md;
            height: 180px;
            width: 100%;
        }
    }

    &__image {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
}
</style>
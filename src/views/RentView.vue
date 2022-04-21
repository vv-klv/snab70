<template>
    <h1 class="rent-header">
        Прокат строительного оборудования и инструментов
    </h1>
    <p class="rent-descr">
        Для ремонта в квартире, работ на даче, постройки дома, внутренней
        отделки – у нас есть строительный инструмент для всех видов работ по
        низким ценам.
        <br>
        Прокат инструмента в Томске – отличный и экономичный вариант при
        проведении разовых или недолгосрочных работ.
    </p>
    <RentList/>
    <RentRules/>
</template>

<script>
import RentList from '@/components/RentList';
import RentRules from '@/components/RentRules';

export default {
    name: "RentView",
    components: {RentRules, RentList}

}
</script>

<style lang="scss" scoped>
@import '../css/_variables';

.rent {
    &-header {
        text-align: center;
        color: $secondary-color;
        margin-bottom: $gap-md;

        @media (max-width: 575px) {
            font-size: 24px;
        }
    }

    &-descr {
        font-size: 16px;
        margin-bottom: $gap-md;

        @media (max-width: 767px) {
            font-size: 14px;
        }
    }
}

</style>
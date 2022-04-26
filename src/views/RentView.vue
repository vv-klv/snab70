<template>
    <h1 class="rent-header">
        Прокат строительного оборудования и инструментов
    </h1>
    <About/>
    <RentList/>
    <RentRules/>
</template>

<script>
import About from '@/components/About';
import RentList from '@/components/RentList';
import RentRules from '@/components/RentRules';

export default {
    name: "RentView",
    components: {About, RentRules, RentList}
}
</script>

<style lang="scss" scoped>
@import '../css/_variables';

.rent {
    &-header {
        text-align: center;
        color: $color-primary;
        margin-bottom: $gap-md;

        @media (max-width: 575px) {
            font-size: 24px;
        }
    }

    &-descr {
        text-align: center;
        font-size: 15px;
        margin-bottom: $gap-md;

        @media (max-width: 767px) {
            font-size: 14px;
        }
    }
}

</style>
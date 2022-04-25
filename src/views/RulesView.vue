<template>
    <RentRules :is-expanded="true"/>
</template>

<script>
import RentRules from '@/components/RentRules';
export default {
    name: "RulesView",
    components: {RentRules}
}
</script>

<style lang="scss" scoped>
@import '../css/_variables';

</style>
<template>
    <RentRules :is-expanded="expandedPanels"/>
</template>

<script>
import RentRules from '@/components/RentRules';
export default {
    name: "RulesView",
    data() {
        return {
            expandedPanels: [0, 1, 2],
        }
    },
    components: {RentRules}
}
</script>

<style lang="scss" scoped>
@import '../css/_variables';

</style>
<template>
    <iframe
        class="map"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A3def23f5b11cc0221e46b700be044fa92f80109f2e3fa18bb2c7318b42556dff&amp;source=constructor"
        height="500"
        frameborder="0"
    />
</template>

<script>
export default {
    name: "MapComponent"
}
</script>

<style lang="scss" scoped>
@import '../css/_variables';

.map {
    margin-top: $gap-sm;
    width: 100%;
    border-radius: 6px;
    box-shadow: $shadow;
}
</style>
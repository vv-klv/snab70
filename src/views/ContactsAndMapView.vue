<template>
    <div class="wrapper">
        <h1 class="title">
            Контактная информация и схема проезда
        </h1>
        <ContactsList/>
        <MapComponent class="map"/>
    </div>
</template>

<script>
import ContactsList from '@/components/ContactsList';
import MapComponent from '@/components/MapComponent';
export default {
    name: "ContactsAndMapView",
    components: {ContactsList, MapComponent}

}
</script>

<style lang="scss" scoped>
@import '../css/_variables';

.wrapper {
    display: flex;
    flex-direction: column;
    gap: $gap-md;
}

.title {
    text-align: center;
    color: $color-secondary;

    @media (max-width: 575px) {
        font-size: 1.5rem;
    }
}
</style>
<template>
    <v-textarea
        class="search"
        v-model="searchQuery"
        label="Поиск инструмента"
        variant="contained"
        prepend-inner-icon="mdi-magnify"
        color="#2b5e83"
        rows="1"
        no-resize
        clearable
    />
    <div class="card-list">
        <v-alert
            class="nothing-founded"
            type="error"
            v-show="searchedItems.length === 0"
        >
            Не найдено!
        </v-alert>
        <div
            class="card-list__category card-category"
            v-for="(category, i) in searchedItems"
            :key="i"
        >
            <h3 class="card-category__title">{{ category[0] }}</h3>
            <RentCard
                v-for="(item, j) in category[1]"
                :key="j"
                :item="item"
            />
        </div>
    </div>
</template>

<script>
import RentCard from '@/components/RentCard';
import instruments from '@/instruments.json'

export default {
    name: "RentList",
    components: {RentCard},
    data() {
        return {
            searchQuery: '',
            rentItems: instruments
        }
    },
    computed: {
        searchedItems() {
            const categories = Object.values(this.rentItems)
            console.log(categories);
            return Object.values(this.rentItems).filter(cat =>
                cat[0].toLowerCase()
                    .includes(this.searchQuery.toLowerCase())
            )
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../css/_variables";

.search {
    margin: $gap-md auto $gap-md*2;
    width: 100%;
}

.nothing-founded {
    font-size: 1.5rem;
    margin: 0 auto $gap-md;
    color: $color-secondary;
    box-shadow: $shadow;
}

.card-list {
    display: flex;
    flex-direction: column;
    margin: $gap-md auto;
    gap: $gap-md;
}

.card-category__title {
    font-size: 1.5rem;
    text-align: center;
    color: $color-primary;
    margin-bottom: $gap-md;

    padding: $gap-sm 0;

    background-color: $color-primary--light;
    box-shadow: $shadow;
    border-radius: 4px;
}
</style>
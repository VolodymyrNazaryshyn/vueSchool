<template>
    <div class="container">
        <product-card 
            v-for="card in cardsListData" 
            :key="card.id" 
            :card-data="card" 
        />
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
    name: "ProductPanel",

    components: { ProductCard },

    props: {
        cardsListData: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="css" scoped>
.container {
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>
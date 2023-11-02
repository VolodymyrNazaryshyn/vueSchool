<template>
    <div class="product-container">
        <a class="img-block" :href="cardData.link">
            <img :src="cardData.imgSrc" :title="cardData.title" alt="">
        </a>
        <div class="product-info">
            <a class="title" :href="cardData.link">{{ cardData.title }}</a>
            <div class="economy-block">Ваша економія: <span>{{ cardData.discount }} ₴</span></div>
            <div class="old-price">
                <span class="price">{{ cardData.oldPrice }}</span>
                <div class="currency">₴</div>
            </div>
            <div class="buy-block">
                <div class="price-block">
                    <div class="price">{{ cardData.price }}</div>
                    <div class="currency">₴</div>
                </div>
                <button class="buy-btn">Купити</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductCard",

    props: {
        cardData: {
            type: Object,
            default: () => ({}),
        },
    },

}
</script>

<style lang="css" scoped>
.product-container {
    width: 450px;
    height: 160px;
    display: flex;
    align-items: center;
}

.product-container:not(:last-child) {
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
}

.img-block {
    width: 150px;
    height: 120px;
}

.img-block img {
    width: 150px;
    height: 120px;
    cursor: pointer;
}

.product-info {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px 0px 0px 10px;
}

.title {
    font-size: 14px;
    text-align: left;
    color: #4d81b0;
    cursor: pointer;
    text-decoration: none;
}

.economy-block {
    margin-top: 5px;
    font-size: 11px;
    text-align: left;
    color: #747272;
}

.economy-block span {
    color: #f83a40;
}

.old-price {
    display: flex;
    align-items: end;
    margin-top: 10px;
    color: #a3a1a1;
}

.old-price .price {
    font-size: 14px;
    text-align: left;
    text-decoration: line-through;
}

.old-price .currency {
    margin: 0px 0px 1px 3px;
    font-size: 10px;
    text-decoration: none;
}

.buy-block {
    display: flex;
    align-items: end;
    justify-content: space-between;
    margin-top: 10px;
}

.price-block {
    display: flex;
    align-items: end;
    color: #f83a40;
}

.buy-block .price {
    font-size: 18px;
    text-align: left;
}

.buy-block .currency {
    margin: 0px 0px 1px 3px;
    font-size: 14px;
}

.buy-btn {
    background-color: #00a046;
    border: 1px solid #00a046;
    border-radius: 5px;
    color: #fff;
    padding: 5px 10px 5px 10px;
    cursor: pointer;
}

.buy-btn:hover {
    background-color: #00c656;
    color: #000;
}
</style>
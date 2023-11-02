<template>
    <div class="container">
        <div class="img-block">
            <a :href="cardData.productLink">
                <img :src="cardData.imgSrc" alt="">
            </a>
            <div class="tag">
                <svg viewBox="0 0 24 24" focusable="false" height="12" width="12">
                    <path
                        d="m2.59,11.58l9,-9c0.36,-0.36 0.86,-0.58 1.41,-0.58l7,0c1.1,0 2,0.9 2,2l0,7c0,0.55 -0.22,1.05 -0.59,1.42l-9,9c-0.36,0.36 -0.86,0.58 -1.41,0.58c-0.55,0 -1.05,-0.22 -1.41,-0.59l-7,-7c-0.37,-0.36 -0.59,-0.86 -0.59,-1.41c0,-0.55 0.23,-1.06 0.59,-1.42zm15.91,-4.58c0.83,0 1.5,-0.67 1.5,-1.5s-0.67,-1.5 -1.5,-1.5s-1.5,0.67 -1.5,1.5s0.67,1.5 1.5,1.5z"
                        fill="#fff">
                    </path>
                </svg>
            </div>
        </div>
        <div class="space-between">
            <a class="logo-block" :href="cardData.companyLink" :title="cardData.companyTitle">
                <div class="logo-block-img">
                    <img :src="cardData.logo" alt="">
                </div>
                <span>{{ cardData.companyTitle }}</span>
            </a>
            <span v-if="cardData.inStock" class="in-stock">В наявності</span>
        </div>
        <a class="description" :href="cardData.productLink" :title="cardData.description">{{ cardData.description }}</a>
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
.container {
    width: 200px;
    height: 220px;
    background-color: #202124;
    display: inline-block;
}
.img-block {
    margin: 10px 0px 0px 10px;
    width: 180px;
    height: 160px;
    position: relative;
    overflow: hidden;
    border-radius: 15px;
}
.img-block img {
    width: 180px;
    height: 160px;
    cursor: pointer;
    transition: transform 0.5s ease 0s;
}
.img-block img:hover {
    transform: scale(1.1);
}
.tag {
    padding: 2px 3px 0px 3px;
    border-radius: 5px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width: fit-content;
    top: 130px;
    left: 10px;
    pointer-events: none;
}
.space-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.in-stock {
    color: #70b789;
    font-size: 13px;
    margin: 13px 10px 0px 0px;
}
.logo-block {
    margin: 15px 0px 0px 15px;
    color: #8fadba;
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 3px;
    width: fit-content;
    cursor: pointer;
    text-decoration: none;
}
.logo-block:hover span {
    text-decoration: underline;
}
.logo-block-img {
    width: 11px;
}
.logo-block-img img {
    width: 11px;
}
.description {
    width: fit-content;
    display: flex;
    margin: 3px 0px 0px 15px;
    color: #abb9bb;
    font-size: 13px;
    cursor: pointer;
    text-decoration: none;
}
</style>
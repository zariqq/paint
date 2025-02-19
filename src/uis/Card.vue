<script setup>
import { defineProps } from 'vue';

defineProps({
    cardInfo: {
        type: Object,
        default(rawProp) {
            console.log(rawProp);
            let def = {
                img_src: "/1.svg",
                number: 0,
                header: "Phasellus Vitae",
                subheader: "Quisque",
                text: "Porttitor vitae vel amet"
            };
            return Object.assign(def, rawProp);
        },
        required: true
    }
})

</script>

<template>
    <article class="card">
        <div class="card__icon">
            <img :src="cardInfo.img_src" alt="" width="60" height="60" loading="lazy">
        </div>
        <div class="card__number">
            {{ cardInfo.number }}<span class="number_dot">.</span>
        </div>
        <h3 class="card__header">
            {{ cardInfo.header }}
        </h3>
        <h5 class="card__subheader">
            {{ cardInfo.subheader }}
        </h5>
        <p class="subp">
            {{ cardInfo.text }}
        </p>
    </article>
</template>

<style>
.card {
    /* --card-bg-color: white;
    --card-dot-color: var(--yellow); */

    max-width: 350px;
    max-height: 400px;
    width: 100%;
    height: 100%;
    border-radius: 55px;
    padding: 46px;
    color: var(--dark);

    background-color: var(--card-bg-color, white);

    position: relative;
    z-index: 1;
    overflow: hidden;
    transition: .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

}

.card::before {
    position: absolute;
    bottom: -120%;
    left: 0;
    content: '';
    width: 100%;
    height: 120%;
    border-radius: 100% 100% 0 0;
    background-color: var(--dark);
    z-index: -1;
    transition: .8s var(--bounce);
}

.card:hover::before {
    bottom: 0;
    border-radius: 55px 55px 0 0;
    /* box-shadow: 0 0 12px; */
}

.card:hover {
    color: white;
    box-shadow: 0 0 172px rgba(8, 8, 9, 0.32);
    /* background-color: var(--dark); */
}

.card__icon {}

.card__number {
    font-size: 68px;
    font-weight: 700;
}

.number_dot {
    color: var(--card-dot-color, var(--yellow));
}

.card__header {
    margin: 9px 0 16px 0;
}

.card__subheader {
    font-weight: 600;
}

.subp {
    font-weight: 300;
}
</style>
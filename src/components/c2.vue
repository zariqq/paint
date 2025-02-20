<script setup>
const cards = [
    {
        img_src: "1.svg",
        number: 1,
        header: "Phasellus Vitae",
        subheader: "Quisque",
        text: "Porttitor vitae vel amet"
    },
    {
        img_src: "2.svg",
        number: 2,
        header: "Phasellus Vitae",
        subheader: "Quisque",
        text: "Porttitor vitae vel amet"
    },
    {
        img_src: "3.svg",
        number: 3,
        header: "Phasellus Vitae",
        subheader: "Quisque",
        text: "Porttitor vitae vel amet"
    },
    {
        img_src: "4.svg",
        number: 4,
        header: "Phasellus Vitae",
        subheader: "Quisque",
        text: "Porttitor vitae vel amet"
    }
];

cards.forEach((c) => (c.img_src = import.meta.env.BASE_URL + c.img_src));
console.log(cards);

const cardStyle = {
    "--card-bg-color": "var(--yellow)",
    "--card-dot-color": "white"
}
</script>

<template>
    <section class="c2 container">
        <div class="c2__inner">
            <div class="left">
                <template v-for="(card, i) in cards">
                    <Card class="c2__card" :card-info="card" />
                </template>
            </div>
            <div class="right">
                <p class="right__top_header">
                    Quisque porttitor vitae vel amet neque scelerisque mattis. Consectetur nibh velit magna consectetur leo.
                </p>
                <h2 class="right__header">
                    Cursus Integer Conseq Aliquam Tristique.
                </h2>
                <Button class="right__button">Lorem ipsum</Button>
            </div>
        </div>

    </section>
</template>

<style>
.c2 {
    background-color: var(--dark);
    border-radius: 50px;
    color: white;

}

.c2__inner {
    display: grid;
    gap: 40px;
    grid-template-columns: 1fr;
    padding: 40px 20px 20px 20px;
}

.c2__card {
    min-width: 100%;
}

.left {
    display: grid;
    gap: 20px;
    justify-items: center;
}

.right {
    order: -1;
    text-align: center;
}

.right__top_header {
    color: var(--yellow);
}

.right__header {
    margin: 20px 0 30px 0;
}

.right__button {
    margin: 0 auto;

    --button-bg-color: white;
    --button-color: var(--dark);
    --button-shadow-color: var(--yellow);
}

@media (max-width: 769px) {
    .c2__card:nth-child(even) {
        --card-bg-color: var(--yellow);
        --card-dot-color: white;
    }
}

@media (min-width: 768px) {
    .c2 {
        margin-bottom: 200px;
    }

    .left {
        grid-template-columns: repeat(2, 1fr);
        gap: 60px;
        margin: 0 auto -100px auto;
    }

    .c2__card:nth-child(even) {
        position: relative;
        top: 100px;
    }

    .c2__card:nth-child(2),
    .c2__card:nth-child(3) {
        --card-bg-color: var(--yellow);
        --card-dot-color: white;
    }
}

@media (min-width: 1200px) {
    .c2__inner {
        grid-template-columns: 60% auto;
        align-items: center;
        padding: 40px 120px 40px 120px;
    }



    .right {
        order: unset;
    }
}
</style>
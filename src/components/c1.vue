<script setup>
</script>

<template>
    <section class="c1 container">
        <div class="c1__inner">
            <div class="c1__heading">
                <h2>Phasellus a vitae iaculis magna eleifend pulvinar velit odio.</h2>
            </div>
            <div class="c1__content">
                <div class="underlined_heading">
                    Vulputate et vulputate suspendisse natoque!
                </div>
                <div class="left_text">
                    Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris
                    enim
                    pulvinar duis etiam duis vulputate et vulputate suspendisse natoque id tellus consectetur pulvinar
                    et.
                </div>
                <Button class="left__button">Lorem
                    ipsum</Button>
            </div>
            <div class="c1__img">
                <img class="right__img" loading="lazy" src="/some1.svg" alt="Lorem ipsum" srcset="" width="714"
                    height="714">
            </div>
        </div>
    </section>
</template>

<style>
.c1 {}

.c1__inner {
    background-color: var(--yellow);
    border-radius: 50px;
    text-align: center;
    padding: 30px;

    display: grid;
    grid-template-areas: "img"
        "heading"
        "content";
}



.c1__content {
    grid-area: content;
    align-self: center;
}

.c1__heading {
    grid-area: heading;
    align-self: end;
}

.c1__content,
.c1__heading {
    max-width: 500px;
    justify-self: center;
}

.c1__img {
    grid-area: img;
}

.underlined_heading {
    text-decoration: underline;
    font-weight: 600;

    margin: 20px 0 12px 0;
}


.left__button {
    --button-bg-color: var(--dark);
    --button-color: white;
    --button-shadow-color: white;
    margin: 30px auto 0 auto;
}

.right__img {
    width: 100%;
    height: 100%;


    aspect-ratio: 1;
    max-width: 500px;
}

@media (min-width: 576px) {
    .c1__inner {
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "heading heading"
            "content img";
    }
}

@media (min-width: 768px) {
    .c1__inner {
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "heading img"
            "content img";
    }

    .c1__content {
        align-self: baseline;
    }
}
</style>
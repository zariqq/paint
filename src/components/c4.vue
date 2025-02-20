<script setup>

</script>

<template>
    <section class="c4 container">
        <div class="c4__inner">
            <div class="c4__left">
                <h2>
                    Cursus Integer consequat Tristique.
                </h2>
                <div class="c4__pills">
                    <Pillow>Ac viverra sed risus praesent vulputate.</Pillow>
                    <Pillow>Natoqu consectetur pulvinar.</Pillow>
                    <Pillow>Sollicitudin ornare tempus nulla varius pulvinar.</Pillow>
                    <Pillow>Varius pulvinar</Pillow>
                    <Pillow>Natoque id tellus consectetur</Pillow>
                    <Pillow>Vulputate et vulputate suspendisse</Pillow>
                </div>
                <Button>Lorem Ipsum</Button>
            </div>
            <div class="c4__right">
                <img class="right__img" src="/some1.svg" alt="Lorem ipsum" width="714" height="714" loading="lazy">
            </div>
        </div>

    </section>
</template>

<style>
.c4 {
    background-color: white;
    border-radius: 50px;
    text-align: center;
}

.c4__inner {
    padding: 25px;
    display: grid;
    grid-template-columns: 1fr;
}

.c4__left {
    --pillow-bg-color: var(--light-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
}

.c4__pills {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 14px;
    margin: 30px 0 40px 0;
    text-align: left;
}

.c4__right {}

.right__img {
    width: 100%;
    height: 100%;
    max-width: 500px;
    aspect-ratio: 1;
    object-fit: contain;
}

@media (max-width: 767px) {
    .c4__right {
        order: -1;
    }
}

@media (min-width: 768px) {
    .c4__inner {
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-items: center;
    }
}
</style>
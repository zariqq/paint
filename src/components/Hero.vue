
<template>
    <section class="hero">
        <div class="hero__inner">
            <div class="up_text">risus praesent vulputate.
            </div>
            <h1>Cursus Integer Consequat Tristique.</h1>
            <div class="pills">
                <Pillow>Cursus Integer</Pillow>
                <Pillow>Integer Consequat</Pillow>
                <Pillow>Tellus Euismod Pellentesque</Pillow>
                <Pillow>Aliquot Tristique</Pillow>
                <Pillow>Pellentesque Tempus</Pillow>
                <Pillow>Mauris Fermentum Praesent</Pillow>
            </div>
            <Button class="hero__button">Lorem Ipsum</Button>
        </div>
    </section>
</template>

<style>
.hero {
    margin-top: 64px;
    text-align: center;
}

.hero__inner {
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 1000px;
    margin: 0 auto;
}

.hero__button {
    max-width: 350px;
}

.pills {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 14px;

    margin: 30px 0 40px 0;
}

.up_text {
    text-transform: uppercase;
    color: var(--yellow);
    font-weight: bold;
    position: relative;
}
</style>
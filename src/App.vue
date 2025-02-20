<script setup>
import Hero from '@/components/Hero.vue';
import Header from '@/components/Header.vue';
import c1 from '@/components/c1.vue';
import c2 from '@/components/c2.vue';
import c3 from '@/components/c3.vue';
import c4 from '@/components/c4.vue';
import Questions from '@/components/Questions.vue';
import FooterVue from '@/components/FooterVue.vue';


</script>

<template>
    <main class="main">
        <div class="hero__wrapper container">
            <Header></Header>
            <Hero></Hero>
        </div>
        <c1></c1>
        <c2></c2>
        <c3></c3>
        <c4></c4>
        <Questions />
        <FooterVue />

    </main>
</template>

<style>
#app {
    position: relative;
    overflow: hidden;
    padding: 0 12px;
}

@media (min-width: 768px) {
    #app {
        padding: 0 32px;
    }

}

#app::before,
#app::after {
    content: '';
    background-image: url(/leaf.svg);
    background-size: 71% 100vh;
    background-repeat: repeat-y;
    position: absolute;
    left: -64%;
    right: 0;
    z-index: -1;
    min-height: 100%;
}

#app::after {
    right: -64%;
    left: 0;
    transform: rotateY(180deg);
    top: 10%;
}
</style>

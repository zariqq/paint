<script setup>
import qanda from '@/assets/qanda.json';

console.log(qanda);
</script>

<template>
    <section class="questions container">
        <div class="questions__title">
            <h1>
                Phasellus a vitae iaculis magna.
            </h1>
            <p>
                Phasellus a vitae iaculis magna eleifend pulvinar velit odio.
            </p>
        </div>
        <div class="questions__list">
            <template v-for="qq in qanda">
                <UserQuestion :question="qq" />
            </template>
        </div>

    </section>
</template>

<style>
.questions {}

.questions__title {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
}

.questions__list {
    display: flex;
    flex-direction: column;
    gap: 14px;
}
</style>
<script setup>

</script>

<template>
    <header class="header">
        <div class="header__inner">
            <img src="/logo.svg" alt="Paint logo" class="logo" width="127" height="63" loading="lazy">

            <div class="change_lang">i18</div>
        </div>
    </header>
</template>

<style>
.header {
    height: 72px;
    border-bottom: 1px solid var(--dark-12);
}

.header__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 12px 22px;
    /* 16px 30px */
    width: 100%;
    height: 100%;
}

.header .logo {
    height: 100%;
    aspect-ratio: 95 / 47;
}

.header .change_lang {
    /* flex: 1; */
    margin-left: auto;
}
</style>
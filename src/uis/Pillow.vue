<template>
    <div class="pillow">
        <slot></slot>
    </div>
</template>

<style>
.pillow {
    background-color: var(--pillow-color, #FFF);
    padding: 7px 25px 7px 14px;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 7px;
    border-radius: 500px;
    width: fit-content;

    font-weight: 600;
}

.pillow::before {
    content: '';
    background-image: url(/check.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    min-width: 25px;
    height: 25px;
}
</style>
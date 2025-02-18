<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<style>
.button {
    --button-color: var(--yellow);

    padding: 17px 38px;

    background-color: var(--button-color);
    border-radius: 500px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    width: 100%;
    font-size: 1.25rem;
    border: 2px solid var(--button-color);
}

.button,
.button::after {
    transition: .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.button:hover {
    box-shadow: 9px 9px;
    border: 2px solid var(--dark);
}

.button:hover::after {
    transform: rotate(90deg);
}

.button::after {
    content: '';
    background-image: url(/arrow.svg);
    background-size: contain;

    width: 30px;
    height: 30px;
}
</style>
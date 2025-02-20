<script>
export default {
    name: 'Button'
}
</script>

<template>
    <button class="button">
        <slot></slot>
        <div class="arrow">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18.75 6.26953L16.9922 8.02734L22.7344 13.7695H2.51953V16.2305H22.7344L16.9922 21.9727L18.75 23.7305L27.4805 15L18.75 6.26953Z"
                    fill="currentColor" />
            </svg>
        </div>
    </button>
</template>

<style>
.button {

    padding: 17px 38px;
    font-weight: 600;
    background-color: var(--button-bg-color, var(--yellow));
    border-radius: 500px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    width: 100%;
    max-width: 350px;
    font-size: 1.25rem;
    color: var(--button-color, var(--dark));
    border: 2px solid var(--button-bg-color, var(--yellow));
}

.button,
.button .arrow {
    transition: .8s var(--bounce);
}

.button:hover {
    box-shadow: 9px 9px var(--button-shadow-color, var(--dark));
    border: 2px solid var(--button-shadow-color, var(--dark));
}

.button:hover .arrow {
    transform: rotate(90deg);
}

.arrow {
    min-width: 30px;
    height: 30px;
}
</style>
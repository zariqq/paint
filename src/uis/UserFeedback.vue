<template>
    <article class="user_feedback">
        <div class="profile_photo">
            <img src="" alt="">
        </div>
        <div class="feedback">
            <h3>
                What our customers thought?
            </h3>
            <p>
                Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim
                pulvinar duis etiam duis.
            </p>
            <div class="author">
                Holly Davidson
            </div>
            <div class="actions">
                <Arrow class="left" />
                <Arrow class="right" />
            </div>
        </div>
    </article>
</template>

<style>
.user_feedback {
    display: flex;
    flex-direction: column;
}

.profile_photo {
    border-radius: 100%;
    max-width: 470px;
    max-height: 470px;
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    background-color: aqua;
}

.feedback {}

.author {}

.actions {}

.left {}

.right {}
</style>
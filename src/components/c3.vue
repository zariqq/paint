<template>
    <section class="c3 container">
        <div class="c3__inner">
            <article class="user_feedback">
                <div class="profile">
                    <img class="profile_photo" src="/Cesar Rincon.webp" loading="lazy" alt="" width="3200" height="3200">
                </div>
                <div class="feedback">
                    <h2>
                        What our customers thought?
                    </h2>
                    <p class="feedback__text">
                        Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris
                        enim
                        pulvinar duis etiam duis.
                    </p>
                    <div class="author">
                        Holly Davidson
                    </div>
                    <div class="actions">
                        <Arrow class="actions_left" />
                        <Arrow class="actions_right" />
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

<style>
.c3 {
    background-color: white;
    border-radius: 50px;
    padding: 40px 38px;

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    position: relative;
    z-index: 1;
    overflow: hidden;
}

.c3__inner {
    display: flex;
    width: 100%;
}

@media (max-width: 765px) {
    .c3__inner {
        max-width: 355px;
    }
}

.user_feedback {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    gap: 40px;
    width: 100%;
}

.c3::after {
    content: '';
    position: absolute;
    z-index: -1;
    bottom: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("/Cesar Rincon.webp");
    background-size: 190%;
    background-repeat: no-repeat;
    background-position: center;
    transition: .8s var(--bounce);
    opacity: .3;
}

.c3:hover::after {
    bottom: 0;
}



.profile {
    border-radius: 100%;
    max-width: 470px;
    max-height: 470px;
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
    background-color: aqua;
    overflow: hidden;
}

.profile_photo {
    width: 100%;
    height: 100%;
}

.feedback {
    max-width: 500px;
}

.feedback__text {
    margin: 20px 0;
}

.author {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
}

.actions {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
}

.actions_left {}

.actions_right {
    transform: rotateY(180deg);
    color: var(--yellow);
}

@media (min-width: 768px) {
    .user_feedback {
        flex-direction: row;
        grid-template-columns: 1fr 1fr;
    }

}
</style>
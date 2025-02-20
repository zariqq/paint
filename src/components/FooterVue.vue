<script setup>

</script>

<template>
    <footer class="footer container">
        <div class="footer__inner">
            <div class="footer__first">
                <h3>Vulputate et pulvinar ethre <br> Suspendisse tellus consecteur</h3>

                <Button class="footer__first__button">Lorem ipsum</Button>
            </div>
            <hr class="footer__line">
            <div class="footer_second">
                <p>
                    Copyright © 2022 Lorem Ipsum.
                </p>
                <a href="#">
                    Privacy Policy | Terms and Conditions
                </a>
            </div>
        </div>
    </footer>
</template>

<style>
.footer {
    color: white;
    border-radius: 50px;
    background-color: var(--dark);
    text-align: center;

    padding: 20px;
}

.footer__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
}

.footer__first {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;
}

.footer__first__button {
    --button-bg-color: white;
    --button-color: var(--dark);
    --button-shadow-color: var(--yellow);
}

.footer__line {
    width: 100%;
}

.footer_second {
    display: flex;
    flex-direction: column;
}


@media (min-width: 768px) {
    .footer {
        padding: 66px;
    }

    .footer__first {
        /* padding-top: 60px;
        padding-bottom: 60px; */
        flex-direction: row;
        justify-content: space-between;
    }

    .footer_second {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }

    .footer__first,
    .footer_second {
        padding-left: 40px;
        padding-right: 40px;
    }
}
</style>
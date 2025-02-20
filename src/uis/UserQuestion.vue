<script>
export default {
    name: 'UserQuestion',
    props: {
        question: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <article class="user_question">
        <label class="user_question__inner">
            <input type="checkbox" class="user_question__toggle" />
            <div class="QandA">
                <h3 class="user_question__q">
                    {{ question.q }}
                </h3>
                <div class="user_question__a">
                    <div>{{ question.a }}</div>
                </div>
            </div>
        </label>
    </article>
</template>

<style>
.user_question {
    border-radius: 40px;
    background-color: white;
    padding: 30px 30px 30px 34px;
}

.user_question__inner {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr auto;
    width: 100%;
    user-select: none;
    cursor: pointer;
}

.QandA {
    order: -1;

    transition: grid-template-rows .8s var(--bounce);
}

.user_question__a {
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;

    transition: .8s var(--bounce);
}

.user_question__toggle:checked+.QandA>.user_question__a {
    grid-template-rows: 1fr;
    margin-top: 20px;
}

.user_question__a>div {
    min-height: 0;
}

.user_question__toggle {
    appearance: none;
    position: relative;
    min-width: 36px;
    min-height: 35px;
    width: 36px;

}

.user_question__toggle:checked {}

.user_question__toggle::before {
    content: '';
    background-image: url(/plus.svg);

    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
}

.user_question__toggle:checked::before {
    background-image: url(/minus.svg);


}
</style>
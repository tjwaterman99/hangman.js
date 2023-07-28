<script setup>

let props = defineProps(['hasWon', 'isOver', 'guessesRemaining'])

const text = computed(() => {
    if (props.hasWon) {
        return "You win! 🎉"
    } else if (props.isOver) {
        return "You lost 😢"
    } else {
        return `${props.guessesRemaining} guesses left...`
    }
})
</script>

<template>
    <div class="text-center">{{ text }}</div>
</template>
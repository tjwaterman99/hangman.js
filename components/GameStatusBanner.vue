<script setup>

let props = defineProps(['game'])

const text = computed(() => {
    if (props.game.hasWon()) {
        return "You win! 🎉"
    } else if (props.game.isOver()) {
        return "You lost 😢"
    } else {
        return `${props.game.guessesRemaining()} guesses left...`
    }
})

const bg = computed(() => {
    if (!props.game.isOver()) {
        return ''
    } else if (props.game.hasWon()) {
        return 'bg-green-200'
    } else {
        return 'bg-red-200'
    }
})

const border_color = computed(() => {
    if (!props.game.isOver()) {
        return ''
    } else if (props.game.hasWon()) {
        return 'border-green-400'
    } else {
        return 'border-red-400'
    }
})

</script>

<template>
    <div :class="['flex', 'flex-grow', 'justify-center', 'mt-4', 'py-2', 'rounded-md', bg, border_color, 'border-2']">
        <div class="text-center">{{ text }}</div>
    </div>
</template>
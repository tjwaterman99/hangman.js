<script setup>

let gameStore = useGameStore()
let { game } = storeToRefs(gameStore)

const text = computed(() => {
    if (game.value.hasWon()) {
        return "You win! 🎉"
    } else if (game.value.isOver()) {
        return "You lost 😢"
    } else {
        return `${game.value.guessesRemaining()} guesses left...`
    }
})

const bg = computed(() => {
    if (!game.value.isOver()) {
        return ''
    } else if (game.value.hasWon()) {
        return 'bg-green-200'
    } else {
        return 'bg-red-200'
    }
})

const border_color = computed(() => {
    if (!game.value.isOver()) {
        return ''
    } else if (game.value.hasWon()) {
        return 'border-green-400'
    } else {
        return 'border-red-400'
    }
})


// TODO: load a user_id, we can use a composoble I think for just pulling it from localstorage
function createGame() {
    let game_result = game.value.getResult()
    let user = getUser().load()
    let results = {user_id: user.id, ...game_result}
    $fetch('/api/results', {method: 'post', body: {data: results}})
    gameStore.createGame()
}

</script>

<template>
    <div :class="['flex', 'flex-grow', 'justify-between', 'mt-4', 'py-2', 'rounded-md', bg, border_color, 'border-2']">
        <div class="text-center px-2 mx-2">{{ text }}</div>
        <div class="text-center px-2 mx-2 bg-sky-300 rounded-md" @click="createGame()">New Game</div>
    </div>
</template>
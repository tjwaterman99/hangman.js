<script setup>
let gameStore = useGameStore()
let { game } = storeToRefs(gameStore)
let rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]
</script>

<template>
    <div class="flex-flex-wrap mt-10">
        <div class="flex flex-wrap justify-center" v-for="row of rows">
            <Letter v-for="char of row" @click="gameStore.guessLetter(char)" :letter=char :guessed="game.guesses.includes(char)" :matched="game.matches(char)"></Letter>
        </div>
    </div>
</template>
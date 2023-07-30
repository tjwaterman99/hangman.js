<script setup lang="ts">
let gameStore = useGameStore()
let { game } = storeToRefs(gameStore)
</script>

<template>
<div class="mt-10">
    <div v-for="sentence of game.parsedSentence()" class="flex flex-wrap">
    <TargetLetter v-for="char of sentence" :letter="char" :guessed="game.guesses.includes(char)" :game=game></TargetLetter>
    </div>
</div>    
</template>
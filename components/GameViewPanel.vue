<script setup>
let props = defineProps(['game'])
let game = props.game
</script>

<template>
<div class="mt-10">
    <div v-for="sentence of game.sentence" class="flex flex-wrap">
    <TargetLetter v-for="char of sentence" :letter="char" :guessed="game.guessed_letters.includes(char)" :game=game></TargetLetter>
    </div>
</div>    
</template>
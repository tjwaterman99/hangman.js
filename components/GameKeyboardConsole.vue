<script setup>
let props = defineProps(['game'])
let rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]
</script>

<template>
    <div class="flex-flex-wrap mt-10">
        <div class="flex flex-wrap justify-center" v-for="row of rows">
            <Letter v-for="char of row" @click="game.guessLetter(char)" :letter=char :guessed="game.guessed_letters.includes(char)" :matched="game.letters.includes(char)"></Letter>
        </div>
    </div>
</template>
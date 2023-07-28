<script setup>
import { Hangman } from 'hangman-js';

let available_chars = 'abcdefghijklmnopqrstuvwxyz'.split('')
let hangman = ref(new Hangman("This is a sentence"))
</script>

<template>
  <div class="flex justify-center">
  <div class="max-w-lg">
    <br class="min-w-10">
    <StatusBanner class="flex-grow" :has-won="hangman.hasWon()" :isOver="hangman.isOver()" :guessesRemaining="hangman.guessesRemaining()"/>
    <br class="min-w-10">
    <div class="flex flex-wrap">
      <Letter v-for="char of available_chars" @click="hangman.guessLetter(char)" :letter=char :guessed="hangman.guessed_letters.includes(char)" :matched="hangman.letters.includes(char)"></Letter>
    </div>
    <br class="min-w-10">
    <div>
      <div v-for="sentence of hangman.sentence" class="flex flex-wrap">
        <TargetLetter v-for="char of sentence" :letter="char" :guessed="hangman.guessed_letters.includes(char)"></TargetLetter>
      </div>
    </div>
  </div>
</div>
</template>

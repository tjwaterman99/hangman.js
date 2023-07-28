<script setup>
import { Hangman } from 'hangman-js';

let available_chars = 'abcdefghijklmnopqrstuvwxyz'.split('')
let hangman = ref(new Hangman("This is a sentence"))
</script>

<template>
  <div>
    <div>
      <Letter v-for="char of available_chars" @click="hangman.guessLetter(char)" :letter=char :guessed="hangman.guessed_letters.includes(char)" :matched="hangman.letters.includes(char)"></Letter>
    </div>
    <div>Letters remaining: {{ hangman.guesses_left }}</div>
    <div>Letters guessed: {{ hangman.guessed_letters }}</div>
    <div>Guesses remaining: {{ hangman.guessesRemaining() }}</div>
    <div>
      <div v-for="sentence of hangman.sentence">
        <span v-for="char of sentence">{{ char }}</span>
      </div>
    </div>
    <div>Won: {{ hangman.hasWon() }}</div>
  </div>
</template>

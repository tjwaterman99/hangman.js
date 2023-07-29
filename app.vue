<script setup>
import { Hangman } from 'hangman-js';

let available_chars = 'abcdefghijklmnopqrstuvwxyz'.split('')
let hangman = ref(new Hangman("This is a sentence"))
</script>

<template>
  <div class="flex justify-center">
  <div class="max-w-lg">
    <GameStatusBanner :has-won="hangman.hasWon()" :isOver="hangman.isOver()" :guessesRemaining="hangman.guessesRemaining()"/>
    <GameViewPanel :game="hangman" />
    <GameKeyboardConsole :game="hangman" />    
  </div>
</div>
</template>

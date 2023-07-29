<script setup>
import { Hangman, generateSentence } from 'hangman-js';

let sentence = generateSentence()
let hangman = ref(new Hangman(sentence))
</script>

<template>
  <div class="flex justify-center">
  <div class="max-w-lg">
    <GameStatusBanner :game="hangman"/>
    <GameViewPanel :game="hangman" />
    <GameKeyboardConsole :game="hangman" />    
  </div>
</div>
</template>

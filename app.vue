<script setup lang="ts">
// import { Hangman } from 'hangman-js';

let gameStore = useGameStore()
// TODO: we can read from localstorage instead
gameStore.createGame()
</script>

<template>
  <div class="flex justify-center">
  <div class="max-w-lg">
    <GameStatusBanner/>
    <GameViewPanel/>
    <GameKeyboardConsole />    
  </div>
</div>
</template>

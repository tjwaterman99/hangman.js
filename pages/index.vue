<script setup lang="ts">
// import { Hangman } from 'hangman-js';

let gameStore = useGameStore()
let settingsStore = useSettingsStore()
settingsStore.load()
gameStore.createGame()
</script>

<template>
  <div class="flex justify-center">
  <div class="max-w-lg">
    <Navbar />
    <GameStatusBanner/>
    <GameViewPanel/>
    <GameKeyboardConsole />    
  </div>
</div>
</template>

<script setup lang="ts">
let settingsStore = useSettingsStore()
settingsStore.load()
let { settings } = storeToRefs(settingsStore)
</script>

<template>
    <Navbar />
    <h1>Settings</h1>
    <form @submit="settingsStore.flush()">
        <span>Guesses allowed: </span>
        <input class="border-2 border-sky-200" v-model="settings.guesses_allowed" />
        <button class="border-2 border-sky-400 bg-sky-200">Save</button>
    </form>
</template>
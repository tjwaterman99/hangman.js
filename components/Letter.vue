<script setup>
const props = defineProps(['letter', 'guessed', 'matched'])

const color = computed(() => {
    if (!props.guessed) {
        return 'grey'
    } else if (props.matched) {
        return 'green'
    } else {
        return 'red'
    }
})
</script>

<template>
    <div :style="{color: color, padding: '0.5em', border: '1px solid black'}">{{ props.letter }}</div>
</template>
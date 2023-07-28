<script setup>
const props = defineProps(['letter', 'guessed', 'matched'])

const bg = computed(() => {
    if (!props.guessed) {
        return 'bg-gray-200'
    } else if (props.matched) {
        return 'bg-green-200'
    } else {
        return 'bg-red-200'
    }
})
</script>

<template>
    <div :class='["m-1", "p-1", bg]'>{{ props.letter }}</div>
</template>
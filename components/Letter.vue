<script setup>
const props = defineProps(['letter', 'guessed', 'matched'])

const bg = computed(() => {
    if (!props.guessed) {
        return 'bg-gray-200'
    } else if (props.matched) {
        return 'bg-sky-200'
    } else {
        return 'bg-red-200'
    }
})
</script>

<template>
    <div :class='["m-1", "p-1", "w-12", "h-12", "flex", "items-center", "justify-center", bg]'>{{ props.letter }}</div>
</template>
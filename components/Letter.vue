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
    <div :class='["m-1", "p-1", "lg:w-8", "lg:h-8", "w-7", "h-7", "flex", "items-center", "justify-center", bg]'>{{ props.letter }}</div>
</template>
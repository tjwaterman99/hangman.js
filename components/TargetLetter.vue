<script setup>
const props = defineProps(['letter', 'guessed'])



const border = computed(() => {
    if (props.guessed) {
        return 'border-b-2 border-sky-400'
    } else {
        return 'border-b-2 border-gray-200'
    }
})

</script>

<template>
    <div :class='["m-1", "p-1", "w-8", "h-8", "flex", "items-center", "justify-center", border]'>
        <span v-if="props.guessed">
            {{ props.letter }}
        </span>
    </div>
</template>
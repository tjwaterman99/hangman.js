<script setup>
const props = defineProps(['letter', 'guessed', 'game'])



const border = computed(() => {
    if (props.guessed) {
        return 'border-b-2 border-sky-400'
    } else {
        return 'border-b-2 border-gray-200'
    }
})

const text_color = computed(() => {
    if (props.guessed) {
        return 'text-slate-800'
    } else {
        return 'text-slate-300'
    }
})

</script>

<template>
    <div :class='["m-1", "p-1", "w-8", "h-8", "flex", "items-center", "justify-center", "bg-gray-100", border, text_color]'>
        <span v-if="props.guessed || game.isOver()">
            {{ props.letter }}
        </span>
    </div>
</template>
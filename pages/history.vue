<script setup lang="ts">
let client = useSupabaseClient()
let user = getUser().load()


async function loadData() {
    let resp = await client.from('game_history').select('*').eq('user_id', user.id).order('created_at', {ascending: false}).limit(50)
    if (resp.status == 200) {
        return resp.data
    } else {
        return new Array()
    }
}

let data = await loadData()
</script>

<template>
    <Navbar />
    <h1>History</h1>
    <div v-for="result in data">{{ JSON.stringify(result) }}</div>
</template>

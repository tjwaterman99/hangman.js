import { createClient } from '@supabase/supabase-js';

let url = process.env.SUPABASE_URL || 'error'
let key = process.env.SUPABASE_KEY || 'error'

const client = createClient(url, key);

export default defineEventHandler(async (event) => {
    const { data } = await readBody(event)
    console.log(`Saving game ${JSON.stringify(data)}`)
    let resp = await client.from('game_history').insert(data)
    return resp
})
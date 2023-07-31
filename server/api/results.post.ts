export default defineEventHandler(async (event) => {
    const { data } = await readBody(event)
    console.log(`Saving game ${JSON.stringify(data)}`)
    return data
})
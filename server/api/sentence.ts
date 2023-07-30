import { createGame } from 'hangman-js';

export default defineEventHandler((event) => {
    return {
        game: createGame(),
        conf: process.env.SOME_CONFIG
    }
  })
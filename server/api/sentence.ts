import { createGame } from 'hangman-js';

export default defineEventHandler((event) => {
    return createGame()
  })
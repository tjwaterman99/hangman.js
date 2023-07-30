import { Hangman, HangmanInterface, createGame } from 'hangman-js';
import { defineStore } from 'pinia';


export const useGameStore = defineStore({
    id: 'game-store',
    state: () => ({params: {} as HangmanInterface}),
    getters: {
        game: (state) => {
            return new Hangman(state.params)
        }
    },
    actions: {
        createGame() {
            let settingsStore = useSettingsStore()
            settingsStore.load()
            let { settings } = storeToRefs(settingsStore)
            this.params = createGame(settings.value.guesses_allowed)
        },

        guessLetter(letter: string) {
            this.game.addGuess(letter)
            this.$patch({params: this.game.serialize()})
        }
    }
})
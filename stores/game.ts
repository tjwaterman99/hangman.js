import { Hangman, HangmanInterface, createGame } from 'hangman-js';
import { defineStore } from 'pinia';


// There's a race condition going on where there are
// users of the store that want to access the getter
// before the params of the state have been set.
export const useGameStore = defineStore({
    id: 'game-store',
    state: () => ({params: {
        sentence: '',
        guesses: [],
        num_guesses: 10
    } as HangmanInterface}),
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
            this.flush()
            return this.params
        },

        flush() {
            if (process.client) {
                localStorage.setItem('active-game', JSON.stringify(this.params))
            }
            return this.params
        },

        load() {
            if (process.client) {
                let params = localStorage.getItem('active-game')
                if (params) {
                    this.params = JSON.parse(params)
                } else {
                    this.params = this.createGame()
                }
            }
            return this.params
        },

        guessLetter(letter: string) {
            this.game.addGuess(letter)
            this.$patch({params: this.game.serialize()})
            this.flush()
        }
    }
})
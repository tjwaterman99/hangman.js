import { Hangman, HangmanInterface, createGame } from 'hangman-js';
import { defineStore } from 'pinia';


interface Settings {
    guesses_allowed?: number
}


export const useSettingsStore = defineStore({
    id: 'settings-store',
    state: () => ({settings: {} as Settings}),
    actions: {
        updateGuessesAllowed(value: number) {
            this.settings.guesses_allowed = value
            this.flush()
            console.log("Updated guesses allowed")
            return this.settings
        },

        flush() {
            if (process.client) {
                localStorage.setItem('settings', JSON.stringify(this.settings))
            }
            return this.settings
        },

        load() {
            if (process.client) {
                let settings = localStorage.getItem('settings')
                if (settings) {
                    this.settings = JSON.parse(settings)
                } else {
                    this.settings = {guesses_allowed: 8}
                }
            }
            return this.settings
        }
    }
})
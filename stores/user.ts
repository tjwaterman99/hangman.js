import { defineStore } from 'pinia';
import { v4 as uuid4 } from 'uuid';

export interface User {
    id: string
}

export const getUser = defineStore({
    id: 'get-user',
    state: function() {
        return {
            user: {} as User
        } 
    },

    actions: {
        load: function() {
            if (process.client) {
                let user_raw = localStorage.getItem('user')
                if (user_raw) {
                    return JSON.parse(user_raw)
                } else {
                    let user_id = uuid4()
                    this.$patch({user: {id: user_id}})
                    this.flush()
                    return this.user
                }
            } else {
                return {id: uuid4()}
            }
        },

        flush: function() {
            if (process.client) {
                localStorage.setItem('user', JSON.stringify(this.user))
                console.log(`Flushed ${JSON.stringify(this.user)}`)
            }
            return this.user
        }
    }
})

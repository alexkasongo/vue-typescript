import axios from 'axios'
import { UserSubmit, UserResponse } from './models';

export const conduitApi = axios.create({
    baseURL: 'https://conduit.productionready.io/api'
})

export function setJWT(jwt: string) {
    conduitApi.defaults.headers.common["Authorization"] = `Token ${jwt}`
}

// remove jwt auth token
export function clearJWT() {
    delete conduitApi.defaults.headers.common["Authorization"] 
}

// Login user
export async function loginUser(user: UserSubmit): Promise<UserResponse|undefined> {
    console.log(`api.ts - 19 - variable`, user);
    try {
        const response = await conduitApi.post('/users/login', {
            user
        })
        console.log(`api.ts - 23 - variable`, user);
        return (response.data as UserResponse)
    } catch(e) {
        console.error(e)
    }
}


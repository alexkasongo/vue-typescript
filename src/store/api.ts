import axios from 'axios'
import { 
    UserSubmit, 
    UserResponse, 
    ArticlesResponse, 
    ProfileResponse, 
    Profile, 
    UserForUpdate, 
    User 
} from './models';

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
    // try {
        const response = await conduitApi.post('/users/login', {
            user
        })
        console.log(`api.ts - 23 - variable`, user);
        // console.log(`api.ts - 24 - variable`, response.data.user);
        return (response.data.user as UserResponse)
    // } catch(e) {
    //     console.error(e)
    // }
}

// posts
export async function getGlobalFeed() {
    const response = await conduitApi.get('/articles')
    return response.data as ArticlesResponse
    console.log(`api.ts - 33 - variable`, response);
}

// user profile
export async function fetchProfile(username: string): Promise<Profile> {
    const response =  await conduitApi.get(`/profiles/${username}`)
    return (response.data as ProfileResponse).profile
}

// update user settings
export async function updateUser(user: UserForUpdate) {
    const response = await conduitApi.put('/user', user)
    return response.data as User
}
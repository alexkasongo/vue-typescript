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
        const response = await conduitApi.post('/users/login', {
            user
        })
        console.log(`api.ts - 23 - variable`, user);
        return (response.data.user as UserResponse)
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
// fetch user
// export async function fetchUser(): Promise<User> {
//     const response =  await conduitApi.get(`/user`)
//     return (response.data as ProfileResponse).user
// }

// update user settings
// export async function updateUser(user: UserForUpdate): Promise<User> {
//     const response = await conduitApi.put('/user', user)
//     return (response.data as User).user
// }
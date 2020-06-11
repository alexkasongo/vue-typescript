/**
 * ?(question mark) means that it might or might not exist
 */
export interface Profile {
    username: string;
    bio?: string;
    image?: string;
    following: boolean;
}

export interface User {
    email: string;
    token: string;
    username: string;
    bio?: string;
    image?: string;
}

export interface UserSubmit {
    email: string;
    password: string;
}

/**
 * data types for the response
 */
export interface UserResponse {
    user: User;
}

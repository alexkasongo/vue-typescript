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

export interface UserForUpdate {
    email?: string;
    username?: string;
    bio?: string;
    password?: string;
    image?: string;
}

export interface Article {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList?: (string)[] | null;
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: Author;
}
export interface Author {
    username: string;
    bio: string;
    image: string;
    following: boolean;
}

export interface UserSubmit {
    email: string;
    password: string;
}

/**
 * data types for the response
 */
export interface UserResponse {
    User: UserResponse | PromiseLike<UserResponse | undefined> | undefined;
    user: User;
}

/**
 * articles
 */
export interface ArticlesResponse {
    articles?: (Article)[] | null;
    articlesCount: number;
}
/**
 * user profile
 */
export interface ProfileResponse {
    profile: Profile;
}

  

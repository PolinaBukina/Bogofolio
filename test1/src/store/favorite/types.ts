import { BlogPostType } from "../posts/types"

export type favoritesState = {
    id: string
    // id: string
    // data: BlogPostType[]
    data: BlogPostType[]
}

export type favoritesAction = {
    type: string
    id?: string
    data?: BlogPostType[]
    // data?: BlogPostType[]
    // favorites?: BlogPostType[]
    // payload?: string
}


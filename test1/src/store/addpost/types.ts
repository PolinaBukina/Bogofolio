export type AddPostState = Partial<{
    data: any
    errors: any
}>

export type AddPostAction = Partial<{
    type: string
    data: any
    errors: any
}>

export type CreatePostType = {
    title: string
    text: string
    description: string
    // lesson_num: number
    lesson_num: string
    image: string
}
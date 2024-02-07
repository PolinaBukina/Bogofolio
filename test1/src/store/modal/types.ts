export type ModalState = {
    image: string
    id: string
}

export type ModalAction = {
    type: string
    image?: string
    id?: string
}

// export const OPEN_IMAGE_PREVIEW = 'OPEN_IMAGE_PREVIEW';
// export const CLOSE_IMAGE_PREVIEW = 'CLOSE_IMAGE_PREVIEW';
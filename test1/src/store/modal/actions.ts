import { AppThunk } from "../store"
import { ModalAction } from "./types"

export const saveIdImageAction = (id: string): ModalAction => {
    return {
        type: 'SAVE_OPEN_CARD',
        id: id
    }
}

export const saveImageAction = (image: string): ModalAction => {
    return {
        type: 'SET_IMAGE',
        image: image
    }
}

export const clearImageAction = (): ModalAction => {
    return {
        type: 'SET_IMAGE',
        image: ''
    }
}

export const startImageAction = (): AppThunk => {
    return (dispatch, getState) => {
        const id = getState().modal.id

        const url = `https://studapi.teachmeskills.by/blog/posts/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                dispatch(saveImageAction(data.image))
                console.log(url)
                console.log(data.image)
            })
    }
}

// export const setClose = (img: string): ModalAction => {
//     return {
//         type: 'close',
//         img: img
//     }
// }

// export const openImagePreview = (imageUrl: string) => ({
//     type: OPEN_IMAGE_PREVIEW,
//     imageUrl,
// });

// export const closeImagePreview = () => ({
//     type: CLOSE_IMAGE_PREVIEW,
// });
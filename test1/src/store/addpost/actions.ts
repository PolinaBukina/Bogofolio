import { refreshAccessTokenAction } from "../auth/actions"
import { AppThunk } from "../store"
import { AddPostAction, AddPostState, CreatePostType } from "./types"

export const createPostSuccesAction = (data: any): AddPostAction => {
    return {
        type: 'CREATE_POST_SUCCES',
        data: data
    }
}

export const postCreateFailAction = (errors: any): AddPostAction => {
    return {
        type: 'CREATE_POST_FAILTURE',
        errors: errors
    }
}

export const createPostAction = (data: CreatePostType): AppThunk => {
    return (dispatch, getState) => {
        const token = getState().auth.accessToken

        const formData = new FormData()
        formData.append('title', data.title)
        formData.append('text', data.text)
        formData.append('description', data.description)
        formData.append('image', data.image)
        formData.append('lesson_num', data.lesson_num)

        const request = new Request(
            'https://studapi.teachmeskills.by/blog/posts/',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: formData
            }
        )

        fetch(request)
            .then(async res => {
                const data = await res.json()
                console.log(res.status, data)

                if (res.status === 401) {
                    // обновление токена 
                    dispatch(refreshAccessTokenAction(() => createPostAction))
                }
            })
    }
}



// export const signInAction = (email: string, password: string): AppThunk => {
//     return (dispatch, getState) => {
//         const request = new Request(
//             'https://studapi.teachmeskills.by/auth/jwt/create/',
//             {
//                 method: 'POST',
//                 headers: {
//                     'Content-type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     "email": email,
//                     "password": password
//                 })
//             }
//         )

//         fetch(request)
//             .then(async res => {
//                 const data = await res.json()
//                 return [data, res.status]
//             })
//             .then(([data, status]) => {
//                 if (status.toString()[0] === '2') {
//                     localStorage.setItem(refreshToken, data.refresh)
//                     dispatch(signInSuccesAction(data.access))
//                 }

//                 if (status.toString()[0] === '4') {
//                     dispatch(signInFailAction(data))
//                 }
//             })
//     }
// }

// export const refreshAccessTokenAction = (): AppThunk => {
//     return (dispatch) => {
//         const request = new Request(
//             'https://studapi.teachmeskills.by/auth/jwt/refresh/',
//             {
//                 method: 'POST',
//                 headers: {
//                     'Content-type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     "refresh": localStorage.getItem(refreshToken)
//                 })
//             }
//         )

//         fetch(request)
//             .then(async res => {
//                 const data = await res.json()
//                 return [data, res.status]
//             })
//             .then(([data, status]) => {
//                 if (status.toString()[0] === '2') {
//                     // обновление в localstorage не нужно
//                     dispatch(signInSuccesAction(data.access))
//                 }

//                 if (status.toString()[0] === '4') {
//                     dispatch(signInFailAction(data))
//                 }
//             })
//     }
// }
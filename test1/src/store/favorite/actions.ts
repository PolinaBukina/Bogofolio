import { BlogPostType } from "../posts/types"
import { AppThunk } from "../store"
import { favoritesAction } from "./types"

export const addToFavoritesAction = (id: string): favoritesAction => {
    return {
        type: 'SAVE_FAVORITES_CARD',
        id: id
    }
}

export const saveFavoritesDataAction = (data: BlogPostType): favoritesAction => {
    return {
        type: 'SAVE_FAVORITES_DATA',
        data: []
    }
}

export const addToFavoritesAsyncAction = (): AppThunk => {
    return (dispatch, getState) => {
        const id = getState().favorites.id
        const url = `https://studapi.teachmeskills.by/blog/posts/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                dispatch(saveFavoritesDataAction(data))
                console.log(data)
            })
    }
}

export const addToFavorites = (id: string) => ({
    type: 'ADD_TO_FAVORITES',
    id: id
})

// import { BlogPostType } from "../posts/types"
// import { AppThunk } from "../store"
// import { favoritesAction } from "./types"

// export const addToFavoritesAction = (id: string): favoritesAction => ({
//     type: 'SAVE_FAVORITES_CARD',
//     id: id,
// })

// export const saveFavoritesAction = (data: BlogPostType[]): favoritesAction => ({
//     type: 'SAVE_FAVORITES_DATA',
//     data: [],
// })

// export const addToFavoritesAsyncAction = (id: string): AppThunk => {
//     return (dispatch, getState) => {
//         // const id = getState().favorites.id
//         const favorites = getState().favorites.data
//         const url = `https://studapi.teachmeskills.by/blog/posts/${id}`

//         // console.log(url)
//         // fetch(url)
//         //     .then(res => res.json())
//         //     .then(data => {
//         //         dispatch(saveFavoritesAction([...favorites, data]))
//         //         console.log(data)
//         //     })

//         console.log(url);
//         fetch(url)
//             .then(res => res.json())
//             .then(data => {
//                 // Проверяем, является ли data массивом BlogPostType[]
//                 const dataArray = Array.isArray(data) ? data : [data]

//                 dispatch(saveFavoritesAction([...favorites, ...dataArray]))
//                 console.log(dataArray)
//             })
//             // .catch(error => {
//             //     console.error('Error while fetching data:', error);
//             // });
//     }
// }

import { favoritesState, favoritesAction } from './types'

const initState: favoritesState = {
    id: '',
    data: []
}

export const favoritesReducer = (state: favoritesState = initState, action: favoritesAction): favoritesState => {
    switch (action.type) {
        case 'SAVE_FAVORITES_CARD':
            return {
                ...state,
                id: action.id || ''
            }
        case 'SAVE_FAVORITES_DATA':
            return {
                ...state,
                data: action.data || []
            }
        default:
            return state
    }
} 

// const initialState: favoritesState = {
//     id: '',
//     data: []
// }

// export const favoritesReducer = (state: favoritesState = initialState, action: favoritesAction): favoritesState => {
//     switch (action.type) {
//         case 'ADD_TO_FAVORITES':
//             return {
//                 ...state,
//                 favorites: action.favorites || []
//             }
//         default:
//             return state
//         }
// }

// В reducers.ts
// import { BlogPostType } from "../posts/types";
// import { favoritesAction } from "./types";

// export interface FavoritesState {
//     id: string;
//     data: BlogPostType[];
// }

// const initState: FavoritesState = {
//     id: '',
//     data: [],
// };

// export const favoritesReducer = (state: FavoritesState = initState, action: favoritesAction): FavoritesState => {
//     switch (action.type) {
//         case 'SAVE_FAVORITES_CARD':
//             return {
//                 ...state,
//                 id: action.id || '',
//             };
//         case 'SAVE_FAVORITES_DATA':
//             return {
//                 ...state,
//                 data: action.data || [],
//             };
//         default:
//             return state;
//     }
// };

// favoritesReducer.ts

// import { BlogPostType } from "../posts/types";
// import { favoritesAction, favoritesState } from "./types";

// const initialState: favoritesState = {
//     id: [],
//     data: [],
// };

// export const favoritesReducer = (
//     state: favoritesState = initialState,
//     action: favoritesAction
// ): favoritesState => {
//     switch (action.type) {
//         case 'SAVE_FAVORITES_CARD':
//             return {
//                 ...state,
//                 id: [...state.id, action.id],
//             };
//         case 'SAVE_FAVORITES_DATA':
//             return {
//                 ...state,
//                 data: action.data || [],
//             };
//         default:
//             return state;
//     }
// };




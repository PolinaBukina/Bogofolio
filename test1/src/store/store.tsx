import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { themeReducer } from "./theme/reducer"
import { burgerReducer } from './menu/reducer'
import { tabReducer } from './tabs/reducer'
import { postsReducer } from './posts/reducer'
import { registrationReducer } from "./registration/reduser"
import { authReducer } from "./auth/reducer"
import { searchReducer } from "./search/reducer"
import { addPostReducer } from "./addpost/reducer"

const rootReducer = combineReducers({
    theme: themeReducer,
    menu: burgerReducer,
    tabs: tabReducer,
    posts: postsReducer,
    reg: registrationReducer,
    auth: authReducer,
    search: searchReducer,
    addpost: addPostReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware(). после точки прописываются middleware logger и тд
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>

export {
    store as appStore
}
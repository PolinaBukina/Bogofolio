import { AddPostState, AddPostAction } from './types'

const initState: AddPostState = {
    // isAuthhorized: false
}

export const addPostReducer = (state = initState, action: AddPostAction): AddPostState => {
    switch (action.type) {
        case 'CREATE_POST_SUCCES':
            return {
                
            }
        case 'CREATE_POST_FAILURE':
            return {
                
            }
        default:
            return state
    }
} 
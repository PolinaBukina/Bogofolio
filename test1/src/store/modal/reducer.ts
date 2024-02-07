import { ModalAction, ModalState } from "./types"

const modalInitState: ModalState = {
    image: '',
    id: ''
}

export const modalReducer = (state = modalInitState, action: ModalAction): ModalState => {
    switch (action.type) {
        case 'SET_IMAGE':
            return {
                ...state,
                image: action.image || ''
            }
        case 'SAVE_OPEN_CARD':
            return{
                ...state,
                id: action.id || ''
            }
        default:
            return state
    }
}
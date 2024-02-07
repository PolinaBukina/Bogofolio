import { useSelector } from "react-redux"
import { AppState } from "../store"

export const useOpenModalState = () => {
    const selector = useSelector(
        (globalState: AppState) => globalState.modal
    )
    return selector
} 
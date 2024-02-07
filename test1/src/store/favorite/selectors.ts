import { useSelector } from "react-redux"
import { AppState } from "../store"

export const useFavorites = () => {
    const selector = useSelector(
        (globalState: AppState) => globalState.favorites
    )
    return selector
}
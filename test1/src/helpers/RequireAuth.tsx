import { ReactNode } from "react"
import { Navigate } from "react-router-dom"
import { useAuthContext } from "./authContext"

type Props = {
    children: ReactNode
}

export const RequireAuth = ({ children }: Props) => {
    const { state } = useAuthContext()
    // { state: { isLogined: true } }

    if (!state.isLogined) {
        // перенаправление на старницу логина
        return (
            <Navigate to='/signin' />
        )
    }

    // return children // если JSX.Element

    // если ReactNode
    return (
        <>
            {children}
        </>
    )
}

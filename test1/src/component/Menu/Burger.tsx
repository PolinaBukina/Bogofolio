import { useReducer, useState } from 'react'
import { BurgerIcon } from './BurgerIcon'
import { CancelIcon } from './CancelIcon'
import styles from './styles.module.scss'

type Props = {
    open: boolean
    onClick: () => void
}

type BurgerState = {
    isOpened: boolean
}

type BurgerAction = {
    type: string
}

const burgerInitState: BurgerState = {
    isOpened: false
}

const burgerReducer = (state: BurgerState, action: BurgerAction): BurgerState => {
    switch (action.type) {
        case 'open':
            return {
                isOpened: true
            }
        case 'close':
            return {
                isOpened: false
            }
        default:
            return state
    }
}

export const Burger = (props: Props) => {
    const [state, dispatch] = useReducer(burgerReducer, burgerInitState)

    const open = () => dispatch({
        type: 'open'
    })

    const close = () => dispatch({
        type: 'close'
    })

    return (
        // <div onClick={props.onClick} className={styles.burger}>
        //     {
        //         props.open ? <CancelIcon /> : <BurgerIcon />
        //     }
        // </div>
        <div onClick={() => state.isOpened ? close() : open()} className={styles.burger}>
            {
                state.isOpened ? (

                    <CancelIcon />

                ) : (
                    <BurgerIcon />
                )
            }
        </div>
    )
}
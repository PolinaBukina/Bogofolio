import { useState } from 'react'
import { BurgerIcon } from './BurgerIcon'
import { CancelIcon } from './CancelIcon'
import styles from './styles.module.scss'

type Props = {
    open: boolean
    onClick: () => void
}

export const Burger = (props: Props) => {
    return (
        <div onClick={props.onClick} className={styles.burger}>
            {
                props.open ? <CancelIcon /> : <BurgerIcon />
            }
        </div>
    )
}
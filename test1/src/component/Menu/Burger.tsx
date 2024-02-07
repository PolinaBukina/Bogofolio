import { useReducer, useState } from 'react'
import { BurgerIcon } from './BurgerIcon'
import { CancelIcon } from './CancelIcon'
// import { Menu } from './Menu'
import styles from './styles.module.scss'

import { useSelector, useDispatch } from 'react-redux'
import { selectMenu } from '../../store/menu/selectors'
import { setClose, setOpen } from '../../store/menu/actions'

export const Burger = () => {

    const { isOpened } = useSelector(selectMenu)
    const dispatch = useDispatch()

    const open = () => dispatch(setOpen())
    const close = () => dispatch(setClose())

    return (
        <div onClick={() => isOpened ? close() : open()} className={styles.burger}>
            {
                isOpened ? (
                    <CancelIcon />
                ) : (
                    <BurgerIcon />
                )
            }
        </div>
    )
}
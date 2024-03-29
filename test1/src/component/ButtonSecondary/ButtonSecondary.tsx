import React from 'react'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../store/theme/selectors'
import styles from './styles.module.scss'

type Props = {
    name: string
    disabled?: boolean
}

export const ButtonSecondary = (props: Props) => {
    const { name, disabled } = props
    const { theme } = useSelector(selectTheme)

    return (
        <button
            className={`${styles.button} ${theme}`}
            style={{
                background: theme === 'light' ? '' : '#1e1d1d',
                color: theme === 'light' ? '' : '#FFFFFF'
            }}
        >
            {props.name}
        </button>
    )
}
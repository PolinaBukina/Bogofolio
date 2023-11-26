import React from 'react'
import styles from './styles.module.scss'

type Props = {
    name: string
    disabled?: boolean
}

export const ButtonPrimary = (props: Props) => {
    const { name, disabled = false } = props

    return (
        // <button className={`${styles.button} ${disabled ? styles.disabled : ''}`}>
        <button className={styles.button}>
            {props.name} {props.disabled}
        </button >
    )
}
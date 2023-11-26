import React from 'react'
import styles from './styles.module.scss'

type Props = {
    name: string
    symbols: string
}

export const UserInfo = (props: Props) => {
    const { name, symbols } = props

    return (
        <button className={styles.button}>
            <p className={styles.symbols}>
                {props.symbols}
            </p>
            <p>
                {name}
            </p>
        </button>

    )
}
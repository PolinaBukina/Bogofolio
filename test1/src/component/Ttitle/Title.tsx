import React from 'react'
import styles from './styles.module.scss'

type Props = {
    name: string
}

export const Title = (props: Props) => {
    return (
        <h1 className={styles.title}>{props.name}</h1>
    )
}

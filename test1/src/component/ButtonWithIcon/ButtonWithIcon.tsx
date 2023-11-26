import React from 'react'
import styles from './styles.module.scss'
import { Icon } from './Icon'

type Props = {
    name: string
    disabled?: boolean
}

export const ButtonWithIcon = (props: Props) => {
    const { name, disabled } = props

    return (
        <div className={styles.button}>
            <Icon />
            {name}
        </div>
    )
}
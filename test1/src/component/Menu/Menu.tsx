import React from 'react'
import { UserInfo } from '../UserInfo/UserInfo'
import styles from './styles.module.scss'

type Props = {
    open: boolean
}

const data = ['Home', 'Add post']

export const Menu = (props: Props) => {
    if (!props.open) {
        return null
    }

    return (
        <div>
            <ul className={styles.menu}>
                <UserInfo name={'Polina Bukina'} symbols={'PB'} />
                {data.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
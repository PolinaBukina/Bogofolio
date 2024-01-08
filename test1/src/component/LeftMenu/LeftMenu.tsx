import React from 'react'
import { useSelector } from 'react-redux'
import styles from './styles.module.scss'
import { selectMenu } from '../../store/menu/selectors'
import { UserInfo } from '../UserInfo/UserInfo'
import { ThemeButtons } from '../ThemeButtons/ThemeButtons'
import { ButtonSecondary } from '../ButtonSecondary/ButtonSecondary'

const data = ['Home', 'Add post']

const LeftMenu = () => {
    const { isOpened } = useSelector(selectMenu)

    if (!isOpened) {
        return null
    }

    return (
        <div className={styles.menu} >
            <ul >
                <UserInfo />
                {data.map((item, index) => (
                    <button className={styles.button}>
                        <li key={index}>{item}</li>
                    </button>
                ))}
            </ul>
            <div>
                <ThemeButtons />
                <ButtonSecondary name={'Sign In'} />
            </div>
        </div>
    )
}

export default LeftMenu

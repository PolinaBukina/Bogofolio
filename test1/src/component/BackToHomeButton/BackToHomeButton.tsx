import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { selectTheme } from '../../store/theme/selectors'
import styles from './styles.module.scss'

export const BackToHomeButton = () => {
    const navigate = useNavigate()
    const { theme } = useSelector(selectTheme)

    // const goHome = () => navigate(-1)
    //const goHome = () => navigate('/')

    return (
        <>
            <Link
                to='/'
                className={`${styles.back} ${theme}`}
                style={{
                    color: theme === 'light' ? '' : '#FFFFFF'
                }}
            >
                Back to home
            </Link>
            {/* <span onClick={goHome}>
                Back to home 2
            </span> */}
        </>
    )
}
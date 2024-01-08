import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'

export const BackToHomeButton = () => {
    const navigate = useNavigate()

    const goHome = () => navigate(-1)
    //const goHome = () => navigate('/')

    return (
        <>
            <Link to='/' className={styles.back}>
                Back to home
            </Link>
            <span onClick={goHome}>
                Back to home 2
            </span>
        </>
    )
}
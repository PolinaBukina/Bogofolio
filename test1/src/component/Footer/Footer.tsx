import React from 'react'
import styles from './styles.module.scss'

export const Footer = () => {
    return (
        <>
            <footer>
                <div className={styles.footer}>
                    <p>
                        ©2022 Blogfolio
                    </p>
                    <p>
                        All rights reserved
                    </p>
                </div>
            </footer>
        </>
    )
}
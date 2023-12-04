import React from 'react'
import { Header } from '../Header/Header'
import { InputText } from '../InputText/InputText'
import styles from './styles.module.scss'
import { ButtonPrimary } from '../ButtonPrimary/ButtonPrimary'
import { Title } from '../Ttitle/Title'
import { Footer } from '../Footer/Footer'

export const Success = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.title}>
                    <a href=''>Back to home</a>
                    <Title name={'Success'} />
                </div>
                <form action="" className={styles.form}>
                    <p>
                        Email confirmed.
                        Your registration is now completed
                    </p>
                    <ButtonPrimary name={"Go To Home"} />
                </form>
            </div>
            <Footer />
        </>
    )
}

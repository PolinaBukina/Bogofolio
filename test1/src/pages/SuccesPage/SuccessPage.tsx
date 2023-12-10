import React from 'react'
import { InputText } from '../../component/InputText/InputText'
import styles from './styles.module.scss'
import { ButtonPrimary } from '../../component/ButtonPrimary/ButtonPrimary'
import { Title } from '../../component/Ttitle/Title'
import { BackToHomeButton } from '../../component/BackToHomeButton/BackToHomeButton'

export const SuccessPage = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <BackToHomeButton />
                    <Title name={'Success'} />
                </div>
                <form action="" className={styles.form}>
                    <p className={styles.text}>
                        Email confirmed. <br />
                        Your registration is now completed
                    </p>
                    <ButtonPrimary name={"Go To Home"} />
                </form>
            </div>
        </>
    )
}

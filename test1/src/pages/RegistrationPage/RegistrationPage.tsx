// import React from 'react'
// import { InputText } from '../../component/InputText/InputText'
import styles from './styles.module.scss'
import { ButtonPrimary } from '../../component/ButtonPrimary/ButtonPrimary'
import { Title } from '../../component/Ttitle/Title'
import { BackToHomeButton } from '../../component/BackToHomeButton/BackToHomeButton'
import { NavLink } from 'react-router-dom'

export const RegistrationPage = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <BackToHomeButton />
                    <Title name={'Registration Confirmation'} />
                </div>
                <form action="" className={styles.form}>
                    <div className={styles.allInputs}>
                        <p className={styles.text}>
                            Please activate your account with the activation <br />
                            link in the email <strong>example@gmail.com.</strong> <br />
                            Please, check your email
                        </p>
                    </div>
                    <NavLink to='/'>
                        <ButtonPrimary name={"Go to home"} />
                    </NavLink>
                </form>
            </div>
        </>
    )
}


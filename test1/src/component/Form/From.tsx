import React from 'react'
import { Header } from '../Header/Header'
import { InputText } from '../InputText/InputText'
import styles from './styles.module.scss'
import { ButtonPrimary } from '../ButtonPrimary/ButtonPrimary'
import { Title } from '../Ttitle/Title'

export const From = () => {
    return (
        <form action="" className={styles.form}>
            <div className={styles.allInputs}>
                <InputText name={'Email'} type={'email'} placeholder={'Your Email'} />
                <InputText name={'Password'} type={'password'} placeholder={'Your Password'} />
            </div>
            <a href="" className={styles.forgot}>Forgot your password?</a>
            <ButtonPrimary name={"Sign In"} />
            <p className={styles.sign}>Don't have an account? <a href=''> Sign up</a></p>
        </form>
    )
}

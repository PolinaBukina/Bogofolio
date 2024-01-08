import React, { useEffect, useRef } from 'react'
import { InputText } from '../../component/InputText/InputText'
import styles from './styles.module.scss'
import { ButtonPrimary } from '../../component/ButtonPrimary/ButtonPrimary'
import { Title } from '../../component/Ttitle/Title'
import { BackToHomeButton } from '../../component/BackToHomeButton/BackToHomeButton'

export const NewPassword = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    })

    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <BackToHomeButton />
                    <Title name={'New Password'} />
                </div>
                <form action="" className={styles.form}>
                    <div className={styles.allInputs}>
                        <InputText name={'Password'} type={'text'} placeholder={'Your Password'} ref1={inputRef} />
                        <InputText name={'Confirm your password'} type={'password'} placeholder={'confirm your Password'} />
                    </div>
                    <ButtonPrimary name={"Set password"} />
                </form>
            </div>
        </>
    )
}

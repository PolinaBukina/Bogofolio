import React, { FormEvent, useEffect, useRef } from 'react'
import { InputText } from '../../component/InputText/InputText'
import styles from './styles.module.scss'
import { ButtonPrimary } from '../../component/ButtonPrimary/ButtonPrimary'
import { Title } from '../../component/Ttitle/Title'
import { BackToHomeButton } from '../../component/BackToHomeButton/BackToHomeButton'

export const ResetPage = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    })

    const resetHandle = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if ((e.target as HTMLInputElement)?.type !== 'submit') {
            return
        }
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <BackToHomeButton />
                    <Title name={'Reset password'} />
                </div>
                <form action="" className={styles.form}>
                    <div className={styles.allInputs}>
                        <InputText name={'Email'} type={'email'} placeholder={'Your Email'} ref1={inputRef} />
                    </div>
                    <ButtonPrimary
                        name={"Reset"}
                        onClick={() => resetHandle}
                    />
                </form>
            </div>
        </>
    )
}
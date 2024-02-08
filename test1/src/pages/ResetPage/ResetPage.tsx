import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { InputText } from '../../component/InputText/InputText'
import styles from './styles.module.scss'
import { ButtonPrimary } from '../../component/ButtonPrimary/ButtonPrimary'
import { Title } from '../../component/Ttitle/Title'
import { BackToHomeButton } from '../../component/BackToHomeButton/BackToHomeButton'
import { signInAction } from '../../store/auth/actions'
import { useAppDispatch } from '../../helpers/useAppDispatch'
import { useNavigate } from 'react-router-dom'

type AuthType = {
    email: string
    password: string
    detail: string
}

export const ResetPage = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [data, setData] = useState<Partial<AuthType>>({})
    const [errors, setErrors] = useState<Partial<AuthType>>({})
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        inputRef.current?.focus()
    })

    const resetHandle = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if ((e.target as HTMLInputElement)?.type !== 'submit') {
            return
        }

        if (!data.email) {
            setErrors({
                ...errors,
                email: data.email ? undefined : 'Заполните Email'
            })
            return
        }

        if (data.email) {
            dispatch(signInAction(data.email, ''))
        }

        navigate('/succes')
    }

    const clearErrors = () => setErrors({})

    const handleEmail = (email: string) => {
        setData({
            ...data,
            email: email
        })
        clearErrors()
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <BackToHomeButton />
                    <Title name={'Reset password'} />
                </div>
                <form action="" className={styles.form} onClick={resetHandle}>
                    {
                        errors.email && <div style={{ color: 'red' }}>
                            {errors.email}
                        </div>
                    }
                    <div className={styles.allInputs}>
                        <InputText
                            name={'Email'}
                            type={'email'}
                            placeholder={'Your Email'}
                            ref1={inputRef}
                            onChange={handleEmail}
                        />
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
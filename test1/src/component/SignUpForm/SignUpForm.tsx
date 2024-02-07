import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { InputText } from '../../component/InputText/InputText'
import styles from './styles.module.scss'
import { ButtonPrimary } from '../../component/ButtonPrimary/ButtonPrimary'
// import { Title } from '../../component/Ttitle/Title'
// import { BackToHomeButton } from '../../component/BackToHomeButton/BackToHomeButton'
import { useRegState } from '../../store/registration/selectors'
import {
    setEmailAction,
    setUsernameAction,
    setPasswordAction,
    sendRegDataAction
} from '../../store/registration/actions'
// import { useDispatch } from 'react-redux'
import { useAppDispatch } from '../../helpers/useAppDispatch'
import { NavLink, useNavigate } from 'react-router-dom'
// import { setDarkThemeAction } from '../../store/theme/actions'
// import { type } from 'os'

type RegType = {
    username: string
    email: string
    password: string
    detail: string
}

export const SignUpForm = () => {
    const formData = useRegState()
    const dispatch = useAppDispatch()
    const [errors, setErrors] = useState<Partial<RegType>>({})
    const navigate = useNavigate()

    const [data, setData] = useState<Partial<RegType>>({})

    useEffect(() => {
        if (formData.isSuccecRegistration) {
            navigate('activate')
        }
    }, [formData])

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    })

    const clearErrors = () => setErrors({})

    //заполнение полей 
    const handleName = (username: string) => {
        setData({
            ...data,
            username: username
        })
        clearErrors()
    }

    const handleEmail = (email: string) => {
        setData({
            ...data,
            email: email
        })
        clearErrors()
    }

    const handlePassword = (password: string) => {
        setData({
            ...data,
            password: password
        })
        clearErrors()
    }

    const signUp = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if ((e.target as HTMLInputElement)?.type !== 'submit') {
            return
        }
        // ВОПРОСЫ!!!
        if (!data.username || !data.email || !data.password) {
            setErrors({
                ...errors,
                username: data.username ? undefined : 'Заполните Name',
                email: data.email ? undefined : 'Заполните Email',
                password: data.password ? undefined : 'Заполните Password'
            })
            return
        }

        if (data.email && data.password && data.username) {
            dispatch(sendRegDataAction())
            // dispatch(signInAction(data.email, data.password))
        }
    }

    return (
        <form action="" className={styles.form}>
            <div>
                {
                    formData.isSuccecRegistration?.toString()
                }
            </div>
            <div>
                {/* {errors} */}
                {
                    formData.isSuccecRegistration === false
                    && JSON.stringify(formData.errors)
                }
            </div>

            <div className={styles.allInputs}>
                <InputText
                    name={'Name'}
                    type={'text'}
                    placeholder={'Your Name'}
                    value={formData.username}
                    onChange={(text: string) => {
                        dispatch(setUsernameAction(text))
                    }}
                // ref1={inputRef}
                />
                <InputText
                    name={'Email'}
                    type={'email'}
                    placeholder={'Your Email'}
                    value={formData.email}
                    onChange={(text: string) => {
                        dispatch(setUsernameAction(text))
                    }}
                />
                <InputText
                    name={'Password'}
                    type={'password'}
                    placeholder={'Your Password'}
                    value={formData.password}
                    onChange={(text: string) => {
                        dispatch(setUsernameAction(text))
                    }}
                />
                <InputText
                    name={'Confirm Password'}
                    type={'password'}
                    placeholder={'Confirm Password'}
                    value={formData.password}
                    onChange={(text: string) => {
                        dispatch(setUsernameAction(text))
                    }}
                />
            </div>
            <ButtonPrimary
                name={"Sign Up"}
                onClick={() => signUp}
            />
            <p className={styles.sign}>Already have an account? <NavLink to={'/signin'}>Sign in</NavLink></p>
        </form>
    )
}
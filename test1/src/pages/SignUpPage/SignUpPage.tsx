import React, { useEffect, useRef, useState } from 'react'
import { InputText } from '../../component/InputText/InputText'
import styles from './styles.module.scss'
import { ButtonPrimary } from '../../component/ButtonPrimary/ButtonPrimary'
import { Title } from '../../component/Ttitle/Title'
import { BackToHomeButton } from '../../component/BackToHomeButton/BackToHomeButton'
import { useRegState } from '../../store/registration/selectors'
import {
    setEmailAction,
    setUsernameAction,
    setPasswordAction,
    sendRegDataAction
} from '../../store/registration/actions'
import { useDispatch } from 'react-redux'
import { useAppDispatch } from '../../helpers/useAppDispatch'
import { useNavigate } from 'react-router-dom'
import { SignUpForm } from '../../component/SignUpForm/SignUpForm'

// function useInput(initialValue: any) {
//     const [value, setValue] = useState(initialValue);

//     function handleChange(e: { target: { value: any } }) {
//         setValue(e.target.value);
//     }

//     return [value, handleChange];
// }

export const SignUpPage = () => {

    // const [text, setText] = useState(value)
    // const [email, setEmail] = React.useState('');
    // const [password, setPassword] = React.useState('');

    // const [name, setName] = useInput('');
    // const [email, setEmail] = useInput('');
    // const [password, setPassword] = useInput('');

    // function handleSubmit(e: { preventDefault: () => void }) {
    //     // e.preventDefault();
    //     console.log(name, email, password)
    // }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <BackToHomeButton />
                    <Title name={'Sign Up'} />
                </div>
                <SignUpForm />
            </div>
        </>
    )
}
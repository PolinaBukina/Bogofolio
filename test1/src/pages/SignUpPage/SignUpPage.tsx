import React, { useEffect, useRef, useState } from 'react'
import { InputText } from '../../component/InputText/InputText'
import styles from './styles.module.scss'
import { ButtonPrimary } from '../../component/ButtonPrimary/ButtonPrimary'
import { Title } from '../../component/Ttitle/Title'
import { BackToHomeButton } from '../../component/BackToHomeButton/BackToHomeButton'

function useInput(initialValue: any) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e: { target: { value: any } }) {
        setValue(e.target.value);
    }

    return [value, handleChange];
}

export const SignUpPage = () => {
    // const [email, setEmail] = React.useState('');
    // const [password, setPassword] = React.useState('');

    const [name, setName] = useInput('');
    const [email, setEmail] = useInput('');
    const [password, setPassword] = useInput('');

    function handleSubmit(e: { preventDefault: () => void }) {
        // e.preventDefault();
        console.log(name, email, password)
    }

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    })

    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <BackToHomeButton />
                    <Title name={'Sign Up'} />
                </div>
                <form action="" className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.allInputs}>
                        <InputText name={'Name'} type={'text'} placeholder={'Your Name'} onChange={setName} ref1={inputRef} />
                        <InputText name={'Email'} type={'email'} placeholder={'Your Email'} onChange={setEmail} />
                        <InputText name={'Password'} type={'password'} placeholder={'Your Password'} onChange={setPassword} />
                        <InputText name={'Confirm Password'} type={'password'} placeholder={'Confirm Password'} onChange={setPassword} />
                    </div>
                    <ButtonPrimary name={"Sign Up"} />
                    <p className={styles.sign}>Already have an account? <a href=''> Sign in</a></p>
                </form>
            </div>
        </>
    )
}
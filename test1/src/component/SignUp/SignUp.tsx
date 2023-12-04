import React, { useState } from 'react'
import { Header } from '../Header/Header'
import { InputText } from '../InputText/InputText'
import styles from './styles.module.scss'
import { ButtonPrimary } from '../ButtonPrimary/ButtonPrimary'
import { Title } from '../Ttitle/Title'
import { Footer } from '../Footer/Footer'

function useInput(initialValue: any) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e: { target: { value: any } }) {
        setValue(e.target.value);
    }

    return [value, handleChange];
}

export const SignUp = () => {
    // const [email, setEmail] = React.useState('');
    // const [password, setPassword] = React.useState('');

    const [name, setName] = useInput('');
    const [email, setEmail] = useInput('');
    const [password, setPassword] = useInput('');

    function handleSubmit(e: { preventDefault: () => void }) {
        // e.preventDefault();
        console.log(name, email, password)
    }

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.title}>
                    <a href=''>Back to home</a>
                    <Title name={'Sign Up'} />
                </div>
                <form action="" className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.allInputs}>
                        <InputText name={'Name'} type={'text'} placeholder={'Your Name'} onChange={setName} />
                        <InputText name={'Email'} type={'email'} placeholder={'Your Email'} onChange={setEmail} />
                        <InputText name={'Password'} type={'password'} placeholder={'Your Password'} onChange={setPassword} />
                        <InputText name={'Confirm Password'} type={'password'} placeholder={'Confirm Password'} onChange={setPassword} />
                    </div>
                    <ButtonPrimary name={"Sign Up"} />
                    <p className={styles.sign}>Already have an account? <a href=''> Sign in</a></p>
                </form>
            </div>
            <Footer />
        </>
    )
}
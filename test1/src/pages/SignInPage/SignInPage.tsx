import React, { useEffect, useRef } from 'react'
import { InputText } from '../../component/InputText/InputText'
import styles from './styles.module.scss'
import { ButtonPrimary } from '../../component/ButtonPrimary/ButtonPrimary'
import { Title } from '../../component/Ttitle/Title'
import { BackToHomeButton } from '../../component/BackToHomeButton/BackToHomeButton'

export const SignInPage = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    })
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <BackToHomeButton />
                    <Title name={'Sign In'} />
                </div>
                <form action="" className={styles.form}>
                    <div className={styles.allInputs}>
                        <InputText name={'Email'} type={'email'} placeholder={'Your Email'} ref1={inputRef} />
                        <InputText name={'Password'} type={'password'} placeholder={'Your Password'} />
                    </div>
                    <a href="#" className={styles.forgot}>Forgot your password?</a>
                    <ButtonPrimary name={"Sign In"} />
                    <p className={styles.sign}>Don't have an account? <a href=''> Sign up</a></p>
                </form>
            </div>
        </>
    )
}



// export const SignIn = () => {
//     return (
//         <>
//             <Header />
//             <div className={styles.container}>
//                 <div className={styles.title}>
//                     <a href=''>Back to home</a>
//                     <Title name={'Sign In'} />
//                 </div>
//                 <form action="" className={styles.form}>
//                     <div className={styles.allInputs}>
//                         <InputText name={'Email'} type={'email'} placeholder={'Your Email'} />
//                         <InputText name={'Password'} type={'password'} placeholder={'Your Password'} />
//                     </div>
//                     <a href="" className={styles.forgot}>Forgot your password?</a>
//                     <ButtonPrimary name={"Sign In"} />
//                     <p className={styles.sign}>Don't have an account? <a href=''> Sign up</a></p>
//                 </form>
//             </div>
//             <Footer />
//         </>
//     )
// }

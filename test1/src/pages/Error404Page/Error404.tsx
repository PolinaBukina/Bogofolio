import React, { useEffect, useRef } from 'react'
import { InputText } from '../../component/InputText/InputText'
import styles from './styles.module.scss'
import { ButtonPrimary } from '../../component/ButtonPrimary/ButtonPrimary'
import { Title } from '../../component/Ttitle/Title'
import { BackToHomeButton } from '../../component/BackToHomeButton/BackToHomeButton'
import { ButtonSecondary2 } from '../../component/ButtonSecondary2/ButtonSecondary2'
import { ButtonSecondary } from '../../component/ButtonSecondary/ButtonSecondary'
import { TextArea } from '../../component/TextArea/TextArea'

export const Error404Page = () => {
    // const inputRef = useRef<HTMLInputElement>(null)

    // useEffect(() => {
    //     inputRef.current?.focus()
    // })
    return (
        <>
            <p>
                ERROR 404 Not Found
            </p>
        </>
    )
}
import React, { useEffect, useRef } from 'react'
import { InputText } from '../../component/InputText/InputText'
import styles from './styles.module.scss'
import { ButtonPrimary } from '../../component/ButtonPrimary/ButtonPrimary'
import { Title } from '../../component/Ttitle/Title'
import { BackToHomeButton } from '../../component/BackToHomeButton/BackToHomeButton'
import { ButtonSecondary2 } from '../../component/ButtonSecondary2/ButtonSecondary2'
import { ButtonSecondary } from '../../component/ButtonSecondary/ButtonSecondary'
import { TextArea } from '../../component/TextArea/TextArea'

export const AddPostPage = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    })
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    {/* <BackToHomeButton /> */}
                    <p>Home <a href=''>| Add post</a></p>
                    <Title name={'Add Post'} />
                </div>
                <form action="" className={styles.form}>
                    <div className={styles.allInputs}>
                        <InputText name={'Title'} type={'text'} placeholder={'Astronauts prep for new solar arrays on nearly spacewalk'} ref1={inputRef} />
                        <div className={styles.inputs}>
                            <InputText name={'Lesson number'} type={'text'} placeholder={'20'} />
                            <InputText name={'Image'} type={'text'} placeholder={'20'} />
                            <ButtonSecondary name={'Upload New'} />
                        </div>
                        <TextArea name={'Description'} placeholder={'Add your text'} />
                        <TextArea name={'Text'} placeholder={'Add your text'} />
                    </div>
                    <div className={styles.buttons}>
                        <ButtonSecondary2 name={'Delete post'} />
                        <div className={styles.buttonsRight}>
                            <ButtonSecondary name={'Cancel'} />
                            <ButtonPrimary name={'Add Post'} />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
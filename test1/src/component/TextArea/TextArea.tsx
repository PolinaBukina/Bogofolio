import React, { useState } from 'react'
import styles from './styles.module.scss'

type Props = {
    name?: string
    placeholder?: string
}

export const TextArea = (props: Props) => {
    const [text, setText] = useState('')
    return (
        <>
            <label className={styles.label}>
                {props.name}
                <textarea
                    className={styles.textarea}
                    placeholder={props.placeholder}>

                </textarea>
            </label>
        </>
    )
}

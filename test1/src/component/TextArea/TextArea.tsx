import React, { useState } from 'react'
import styles from './styles.module.scss'

type Props = {
    name?: string
    placeholder?: string
    value?: string
    onChange?: (text: string) => void
}

export const TextArea = ({ name, placeholder, value, onChange }: Props) => {
    const [text, setText] = useState(value)

    const func = (e: React.FormEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
        onChange && onChange(e.currentTarget.value)
    }

    return (
        <>
            <label className={styles.label}>
                {name}
                <textarea
                    className={styles.textarea}
                    placeholder={placeholder}
                    onInput={func}
                    value={text}
                // onChange={(text) => console.log(text)}
                />
            </label>
        </>
    )
}

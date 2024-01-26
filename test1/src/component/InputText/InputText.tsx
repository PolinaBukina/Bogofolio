import styles from './styles.module.scss'
import { useState } from 'react'
import { getByPlaceholderText } from '@testing-library/react'

type Props = {
    name: string
    placeholder: string
    type: string
    value?: string
    ref1?: React.RefObject<HTMLInputElement>
    onChange?: (text: string) => void

    errors?: string // добавить вывод ошибок 
}

export const InputText = ({ name, ref1, placeholder, type, value, errors, onChange }: Props) => {
    const [text, setText] = useState(value)

    const func = (e: React.FormEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
        onChange && onChange(e.currentTarget.value)
    }

    return (
        <>
            <label className={styles.label}>
                <label>
                    {name}
                </label>
                <input
                    ref={ref1}
                    className={styles.input}
                    type={type}
                    placeholder={placeholder}
                    onInput={func}
                    value={text}
                // defaultValue={'прилоьная штука'}
                />
                {
                    errors && <div>
                        {errors}
                    </div>
                }
            </label>
        </>
    )
}

// export default TextInput


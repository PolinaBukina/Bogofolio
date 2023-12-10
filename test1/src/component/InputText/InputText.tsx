// import React from 'react'

// export const InputText = () => {
//     return (
//         <div>

//         </div>
//     )
// }

import styles from './styles.module.scss'
import { useState } from 'react'
import { getByPlaceholderText } from '@testing-library/react'

type Props = {
    name: string
    placeholder: string
    type: string
    ref1?: React.RefObject<HTMLInputElement>
    onChange?: () => void
}

export const InputText = (props: Props) => {
    const [text, setText] = useState('')

    const func = (e: React.FormEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }

    return (
        <>
            <label className={styles.label}>
                {props.name}
                <input
                    ref={props.ref1}
                    className={styles.input}
                    type={props.type}
                    placeholder={props.placeholder}
                    onInput={func}
                    value={text}
                // defaultValue={'прилоьная штука'}
                />
            </label>
        </>
    )
}

// export default TextInput


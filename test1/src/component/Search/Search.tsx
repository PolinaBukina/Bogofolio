import styles from './styles.module.scss'
import { useState } from 'react'
import { SearchButtonIcon } from './SearchButtonIcon'

export const Search = () => {
    const [text, setText] = useState('')

    const func = (e: React.FormEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }

    return (
        <>
            <input
                className={styles.input}
                type={'text'}
                placeholder={'Search...'}
                onInput={func}
                value={text}
            />
            <div className={styles.button}>
                <SearchButtonIcon />
            </div>
        </>
    )
}
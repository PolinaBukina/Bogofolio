import React, { ChangeEvent, useState, KeyboardEvent, MouseEventHandler, EventHandler } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../helpers/useAppDispatch'
import { clearTextAction, saveTextAction, startSearchAction } from '../../../store/search/actions'
import { useSearchState } from '../../../store/search/selectors'
import { CancelIcon } from '../../Menu/CancelIcon'
import { SearchButtonIcon } from './SearchButtonIcon'
import styles from './styles.module.scss'

export const SearchControl = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { text } = useSearchState()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    // const [text, setText] = useState('') локальная часть

    const toggleTextField = () => {
        setIsOpen(!isOpen)
    }

    const handleText = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(saveTextAction(e.target.value))
    }

    const handleClear = () => {
        dispatch(saveTextAction(''))
    }

    const handleEnterSearch = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            dispatch(startSearchAction())
            navigate('/search')
        }
    }

    return (
        <div className={styles.container}>
            {
                isOpen && <div className={styles.containerSearch}>
                    <input
                        id={'search'}
                        type="text"
                        value={text}
                        className={styles.input}
                        onChange={handleText}
                        onKeyDown={handleEnterSearch}
                        placeholder={'Search...'}
                    />
                    {/* <input type="button" value={'x'} className={styles.button} onClick={handleClear} /> */}
                    <button className={styles.button} onClick={handleClear} >
                        <CancelIcon />
                    </button>
                    {/* <input type="button" value={'search'} onChange={handleSearch} /> */}
                </div>
            }

            {/* <input type="button" value="🔍" onClick={toggleTextField} /> */}
            <button onClick={toggleTextField} className={styles.button}>
                <SearchButtonIcon />
            </button>
        </div>
    )
}

// export default Control

import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useThemeContext } from '../../helpers/themeContext'
import { DarkIcon } from '../DarkIcon/DarkIcon'
import { LightIcon } from '../LightIcon/LightIcon'

// type Props = {
//     theme: string
//     changeTheme: (theme: string) => void
// }

import { useSelector } from 'react-redux'
import { selectTheme } from '../../store/theme/selectors'
import { useDispatch } from 'react-redux'
import { setLightThemeAction, setDarkThemeAction } from '../../store/theme/actions'


export const ThemeButtons = () => {
    // const { state, setLight, setDark } = useThemeContext()

    const { theme } = useSelector(selectTheme)
    const dispatch = useDispatch()

    const setDark = () => dispatch(setDarkThemeAction())
    const setLight = () => dispatch(setLightThemeAction())

    return (
        <div>
            {/* theme: {theme} */}
            {/* можно отделить в отдельный комнпонент */}
            <button
                // onClick={() => changeTheme('dark')}
                onClick={setDark}
                disabled={theme !== 'light'}
                className={styles.button}
            >
                <DarkIcon disabled={theme === 'light'} />
            </button>

            <button
                // onClick={() => changeTheme('light')}
                onClick={setLight}
                disabled={theme === 'light'}
                className={styles.button}
            >
                <LightIcon disabled={theme !== 'light'} />
            </button>
        </div>
    )
}

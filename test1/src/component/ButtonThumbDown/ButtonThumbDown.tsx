import styles from './styles.module.scss'
import { ButtonThumbDownIcon } from './ButtonThumbDownIcon'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../store/theme/selectors'

export const ButtonThumbDown = () => {
    const { theme } = useSelector(selectTheme)
    return (
        <button className={`${styles.button} ${theme}`}
            style={{
                fill: theme === 'light' ? 'blue' : 'red'
            }}
        >
            <ButtonThumbDownIcon />
        </button>
    )
}
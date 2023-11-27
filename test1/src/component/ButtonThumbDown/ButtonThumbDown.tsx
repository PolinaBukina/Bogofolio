import styles from './styles.module.scss'
import { ButtonThumbDownIcon } from './ButtonThumbDownIcon'

export const ButtonThumbDown = () => {
    return (
        <button className={styles.button}>
            <ButtonThumbDownIcon />
        </button>
    )
}
import styles from './styles.module.scss'
import { ButtonThumbUpIcon } from './ButtonThumbUpIcon'

export const ButtonThumbUp = () => {
    return (
        <button className={styles.button}>
            <ButtonThumbUpIcon />
        </button>
    )
}
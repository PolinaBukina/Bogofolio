import React, { useState } from 'react'
import { useFavorites } from '../../store/favorite/selectors'
import { ButtonThumbDownIcon } from '../ButtonThumbDown/ButtonThumbDownIcon'
import { ButtonThumbUpIcon } from '../ButtonThumbUp/ButtonThumbUpIcon'
import styles from './styles.module.scss'

export const Favorites = () => {
    const [state, setState] = useState(0)
    const [state1, setState1] = useState(0)

    const { data } = useFavorites()

    const increase = () => {
        setState(state + 1)
    }

    const increase1 = () => {
        setState1(state1 + 1)
    }

    return (
        <div className={styles.container}>
            {/* <h2 className={styles.header1}>
                Search results `{text}`
            </h2> */}

            <div className={styles.cardContent}>
                {
                    data.map((item) => (
                        <div key={item.id} className={styles.card}>

                            <div className={styles.allText}>
                                <img className={styles.image} src={item.image} />
                                <div className={styles.text}>
                                    <p className={styles.date}>
                                        {item.date}
                                    </p>
                                    <h1 className={styles.header}>
                                        {item.title}
                                    </h1>
                                </div>

                            </div>

                            <div className={styles.allButtons}>
                                <div className={styles.buttons}>
                                    <button onClick={increase}>
                                        <ButtonThumbUpIcon />
                                    </button>
                                    <p>{state}</p>
                                    <button onClick={increase1}>
                                        <ButtonThumbDownIcon />
                                    </button>
                                    <p>{state1}</p>
                                </div>
                                {/* <div className={styles.buttons}>
                                    <button>
                                        <Icon />
                                    </button>
                                    <button>
                                        <MoreIcon />
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import styles from './styles.module.scss'
import { ButtonThumbUpIcon } from '../ButtonThumbUp/ButtonThumbUpIcon'
import { ButtonThumbDownIcon } from '../ButtonThumbDown/ButtonThumbDownIcon'
import { Icon } from '../ButtonWithIcon/Icon'
import { MoreIcon } from '../CardPost1/MoreIcon'

type Props = {
    // id: 0
    image?: string
    text: string
    date: string // 2021-12-12
    // lesson_num: 0
    title: string
    // author: 0
}

export const CardPost3 = (props: Props) => {
    const [state, setState] = useState(0)
    const [state1, setState1] = useState(0)

    const increase = () => {
        setState(state + 1)
    }

    const increase1 = () => {
        setState1(state1 + 1)
    }

    return (
        <div className={styles.cardContent}>
            <div className={styles.allText}>
                <div className={styles.text}>
                    <p className={styles.date}>
                        {props.date}
                    </p>
                    <h1 className={styles.header}>
                        {props.title}
                    </h1>
                </div>
                <img className={styles.image} src={props.image} />
            </div>

            <div className={styles.allButtons}>
                <div className={styles.buttons}>
                    {/* пальцы */}
                    <button onClick={increase}>
                        <ButtonThumbUpIcon />
                    </button>
                    <p>{state}</p>
                    <button onClick={increase1}>
                        <ButtonThumbDownIcon />
                    </button>
                    <p>{state1}</p>
                </div>
                <div className={styles.buttons}>
                    <button>
                        <Icon />
                    </button>
                    <button>
                        <MoreIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}
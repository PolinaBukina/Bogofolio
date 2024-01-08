import React from 'react'
import { CardPost1 } from '../../component/CardPost1/CardPost1'
import { CardPost2 } from '../../component/CardPost2/CardPost2'
import { CardPost3 } from '../../component/CardPost3/CardPost3'
import { Tabs2 } from '../../component/Tabs2/Tabs2'
import { Title } from '../../component/Ttitle/Title'
import styles from './styles.module.scss'

export const MainPage2 = () => {
    return (
        <div className={styles.mainPage}>

            <div className={styles.title}>
                <Title name={'Blog'} />
                <Tabs2 />
            </div>

            <div className={styles.allCards}>
                <div className={styles.leftCards}>
                    {/* <div className={styles.cards2}> */}
                        <CardPost2 />
                        <CardPost2 />
                        <CardPost2 />
                        <CardPost2 />
                        <CardPost2 />
                        <CardPost2 />
                    {/* </div> */}
                </div>
                <div className={styles.rightCards}>
                    <CardPost3 />
                    <CardPost3 />
                    <CardPost3 />
                    <CardPost3 />
                    <CardPost3 />
                    <CardPost3 />
                </div>
            </div>
        </div>
    )
}
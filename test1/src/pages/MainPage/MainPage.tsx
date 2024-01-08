import React from 'react'
import { CardPost1 } from '../../component/CardPost1/CardPost1'
import { CardPost2 } from '../../component/CardPost2/CardPost2'
import { CardPost3 } from '../../component/CardPost3/CardPost3'
import Tabs from '../../component/Tabs/Tabs'
import Tab from '../../component/Tabs2/Tab'
import styles from './styles.module.scss'
import { Tabs2 } from '../../component/Tabs2/Tabs2'
import { Title } from '../../component/Ttitle/Title'
import BlogPostNavigation from '../../component/BlogPostNavigation/BlogPostNavigation'

// НУЖНО ДОБАВИТЬ ЛИНК ДЛЯ КАЖДОЙ КАРТИНКИ ПОСТА
// СМОТРЕТЬ В react37 

export const MainPage = () => {
    return (
        <div className={styles.mainPage}>

            <div className={styles.title}>
                <Title name={'Blog'} />
                <Tabs2 />
            </div>

            <CardPost1 />
            {/* <BlogPostNavigation /> */}

            {/* <div className={styles.allCards}>
                <div className={styles.leftCards}>
                    <div>
                        <CardPost1 />
                    </div>
                    <div className={styles.cards2}>
                        <CardPost2 />
                        <CardPost2 />
                        <CardPost2 />
                        <CardPost2 /> 
                    </div>
                </div>
                <div className={styles.rightCards}>
                    <CardPost3 />
                    <CardPost3 />
                    <CardPost3 />
                    <CardPost3 />
                    <CardPost3 />
                    <CardPost3 /> 
                </div>
            </div> */}

            <BlogPostNavigation />
        </div>
    )
}

// export default Cards

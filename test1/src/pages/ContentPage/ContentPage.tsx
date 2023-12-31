import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Header } from '../../component/Header/Header'
import { ButtonThumbDown } from '../../component/ButtonThumbDown/ButtonThumbDown'
import { ButtonThumbUp } from '../../component/ButtonThumbUp/ButtonThumbUp'
import { ButtonWithIcon } from '../../component/ButtonWithIcon/ButtonWithIcon'
import { Title } from '../../component/Ttitle/Title'
import { Footer } from '../../component/Footer/Footer'
import { BlogPostType } from '../../helpers/Types'
import { useParams } from 'react-router-dom'

const text = [
    'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
    'During the final days of Alice Neel’s blockbuster solo show at the Metropolitan Museum of Art this summer, the line into the exhibition spanned the length of the museum’s European paintings corridor, and the wait was over half an hour. Titled “People Come First,” the show featured more than 100 gritty cityscapes, domestic interiors, and stripped-down portraits of Neel’s neighbors, friends, and fellow artists in the largest-ever showing of her work in her hometown of New York City.',
    'The stories tracked Hambling’s trailblazing career while focusing on her current and upcoming projects. The artist’s installation Relic (2021), produced alongside sound recordist Chris Watson, was recently on view at Snape Maltings in London. Meanwhile, this October, portraits by Hambling will be presented at the Italian gallery Thomas Brambilla. The artist’s “Wave Series” is also currently being exhibited in the group show “Summer Exhibition” at Marlborough London, which runs through September 10th.',
    'The excitement surrounding this exhibition delighted longtime fans of the expressive painter while inspiring a legion of new devotees—a trend matched by Neel’s strengthening position in the art market, especially in the past year. In May, Neel’s 1966 canvas Dr. Finger’s Waiting Room roused a flurry of bids from the United States, Asia, and Europe at Christie’s New York, where it ultimately sold for just over $3 million, breaking both its high estimate and the artist’s auction record. Just hours earlier at Sotheby’s New York, Neel’s double portrait Henry and Sally Hope (1977), depicting an art historian and his wife, sold for just under $1.6 million, notching her third-highest auction result.',
    'The demand for Maggi Hambling’s evocative portraits and exuberant depictions of seascapes and landscapes surged this past week, when the number of collectors inquiring on her work increased more than tenfold from the week before. The British artist, esteemed for her whirling, gestural paintings and bold public sculptures, has seen a consistent wave of interest in her work that has accelerated in the past few years. This recent uptick in interest  is consistent with Hambling’s career trajectory, which has been punctuated by a flurry of public commissions, institutional recognition, and secondary-market demand.'
]

export const ContentPage = () => {
    const { id } = useParams()
    const [data, setData] = useState<BlogPostType>()

    // лучше убрать это из page
    useEffect(() => {
        fetch('https://studapi.teachmeskills.by/blog/posts/' + id)
            .then(res => res.json())
            .then(res =>
                setData(res))
    }, [])

    return (
        <>

            <div>
                id: {data?.id}
            </div>
            <div>
                title: {data?.title}
            </div>
            {/* <div className={styles.content}>
                <div className={styles.title}>
                    <p>Home <a href=''>| Post1223</a></p>
                    <Title name={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'} />
                </div>
                <div className={styles.allContent}>
                    <img src="https://cdn.meta.ua/meta_news/56/01002qwj-5656_870x400.jpeg" alt="" />
                    <div className={styles.contentText}>
                        <div className={styles.text}>
                            {text.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                        </div>
                        <div className={styles.buttons}>
                            <div className={styles.leftButtons}>
                                <ButtonThumbUp />
                                <ButtonThumbDown />
                            </div>
                            <div className={styles.rightButtons}>
                                <ButtonWithIcon name='Add to favorites' />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

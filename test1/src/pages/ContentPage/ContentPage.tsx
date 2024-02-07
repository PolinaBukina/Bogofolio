import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { ButtonThumbUpIcon } from '../../component/ButtonThumbUp/ButtonThumbUpIcon'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { ButtonThumbDownIcon } from '../../component/ButtonThumbDown/ButtonThumbDownIcon'
import { MoreIcon } from '../../component/CardPost1/MoreIcon'
import { Icon } from '../../component/ButtonWithIcon/Icon'
import { saveIdAction, startOpenAction } from '../../store/content/actions'
import { useOpenState } from '../../store/content/selectors'
import { Title } from '../../component/Ttitle/Title'
import { ButtonThumbUp } from '../../component/ButtonThumbUp/ButtonThumbUp'
import { ButtonThumbDown } from '../../component/ButtonThumbDown/ButtonThumbDown'
import { ButtonWithIcon } from '../../component/ButtonWithIcon/ButtonWithIcon'

export const ContentPage = () => {
    const { id, title, text, image } = useOpenState()
    const navigate = useNavigate()

    const [state, setState] = useState(0)
    const [state1, setState1] = useState(0)

    const increase = () => {
        setState(state + 1)
    }

    const increase1 = () => {
        setState1(state1 + 1)
    }

    const goHome = () => navigate(-1)

    return (
        <div className={styles.content}>
            <div className={styles.title}>
                <NavLink to='/'> Home </NavLink>
                <a onClick={goHome}> |Post{id}</a>
            </div>
            <div className={styles.allContent}>
                <div className={styles.contentText}>
                    <div className={styles.text}>
                        {/* <h1 className={styles.header}>
                            {title}
                        </h1> */}
                        <Title name={title} />
                        <img src={image} alt="" className={styles.image} />
                        <p className={styles.description}>
                            {text}
                        </p>
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
            {/* <div key={id} className={styles.card} >
                <div className={styles.allText}>
                    <div className={styles.text}>
                        <h1 className={styles.header}>
                            {title}
                        </h1>
                        <p className={styles.description}>
                            {text}
                        </p>
                    </div>
                    <img className={styles.image} src={image} />
                </div>
            </div> */}
        </div>
    )




    // <div>
    //             id: {data?.id}
    //         </div>
    //         <div>
    //             title: {data?.title}
    //         </div>
    // <div className={styles.content}>
    //             <div className={styles.title}>
    //                 <p>Home <a href=''>| Post1223</a></p>
    //                 <Title name={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'} />
    //             </div>
    //             <div className={styles.allContent}>
    //                 <img src="https://cdn.meta.ua/meta_news/56/01002qwj-5656_870x400.jpeg" alt="" />
    //                 <div className={styles.contentText}>
    //                     <div className={styles.text}>
    //                         {text.map((item, index) => (
    //                             <p key={index}>{item}</p>
    //                         ))}
    //                     </div>
    //                     <div className={styles.buttons}>
    //                         <div className={styles.leftButtons}>
    //                             <ButtonThumbUp />
    //                             <ButtonThumbDown />
    //                         </div>
    //                         <div className={styles.rightButtons}>
    //                             <ButtonWithIcon name='Add to favorites' />
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div> 
}

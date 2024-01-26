import React, { useEffect, useState } from 'react'
import { ButtonThumbUpIcon } from '../ButtonThumbUp/ButtonThumbUpIcon'
import { MoreIcon } from './MoreIcon'
import styles from './styles.module.scss'
import { Icon } from '../ButtonWithIcon/Icon'
import { useSelector } from 'react-redux'
import { selectPosts } from '../../store/posts/selectors'
import { useDispatch } from 'react-redux'
// import { BlogPostType } from '../../store/posts/types'
import { loadPostsAsyncAction } from '../../store/posts/actions'
import { AppDispatch } from '../../store/store'
import { ButtonThumbDownIcon } from '../ButtonThumbDown/ButtonThumbDownIcon'

// type BlogPostType = {
//     id: number,
//     image: string,
//     text: string,
//     date: string,
//     lesson_num: 0,
//     title: string,
//     description: string,
//     author: number
// }



export const CardPost1 = () => {


    const [state, setState] = useState(0)
    const [state1, setState1] = useState(0)

    const increase = () => {
        setState(state + 1)
    }

    const increase1 = () => {
        setState1(state1 + 1)
    }

    const { postlist, limit, offset, page } = useSelector(selectPosts)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(loadPostsAsyncAction())
    }, [limit])

    return (
        <div className={styles.cardContent}>
            {
                postlist.map((item, index) => (
                    <div key={item.id} className={`${styles.card} ${styles.card}${index}`}>
                        <div className={styles.allText}>

                            <div className={styles.text}>
                                <p className={styles.date}>
                                    {item.date}
                                </p>
                                <h1 className={styles.header}>
                                    {item.title}
                                    {/* Astronauts prep for new solar arrays on nearly seven-hour spacewalk */}
                                </h1>
                                <p className={styles.description}>
                                    {item.text}
                                    {/* Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight. */}
                                </p>
                            </div>
                            <img className={styles.image} src={item.image} />
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
                ))
            }
        </div>
    )
}


// import React, { useState } from 'react'
// import styles from './styles.module.scss'
// import { ButtonThumbUpIcon } from '../ButtonThumbUp/ButtonThumbUpIcon'
// import { ButtonThumbDownIcon } from '../ButtonThumbDown/ButtonThumbDownIcon'
// import { Icon } from '../ButtonWithIcon/Icon'
// import { MoreIcon } from './MoreIcon'

// type Props = {
//     // id: 0
//     image?: string
//     text: string
//     date: string // 2021-12-12
//     // lesson_num: 0
//     title: string
//     // author: 0
// }

// export const CardPost1 = (props: Props) => {
//     const [state, setState] = useState(0)
//     const [state1, setState1] = useState(0)

//     const increase = () => {
//         setState(state + 1)
//     }

//     const increase1 = () => {
//         setState1(state1 + 1)
//     }

//     return (
//         <div className={styles.cardContent}>
//             <div className={styles.allText}>
//                 <div className={styles.text}>
//                     <p className={styles.date}>
//                         {props.date}
//                     </p>
//                     <h1 className={styles.header}>
//                         {props.title}
//                     </h1>
//                     <p className={styles.description}>
//                         {props.text}
//                     </p>
//                 </div>
//                 <img className={styles.image} src={props.image} />
//             </div>

//             <div className={styles.allButtons}>
//                 <div className={styles.buttons}>
//                     {/* пальцы */}
//                     <button onClick={increase}>
//                         <ButtonThumbUpIcon />
//                     </button>
//                     <p>{state}</p>
//                     <button onClick={increase1}>
//                         <ButtonThumbDownIcon />
//                     </button>
//                     <p>{state1}</p>
//                 </div>
//                 <div className={styles.buttons}>
//                     <button>
//                         <Icon />
//                     </button>
//                     <button>
//                         <MoreIcon />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

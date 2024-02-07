import React, { MouseEvent, useEffect, useState } from 'react'
import { ButtonThumbUpIcon } from '../ButtonThumbUp/ButtonThumbUpIcon'
import { MoreIcon } from './MoreIcon'
import styles from './styles.module.scss'
import { Icon } from '../ButtonWithIcon/Icon'
import { selectPosts } from '../../store/posts/selectors'
import { useSelector, useDispatch } from 'react-redux'
// import { BlogPostType } from '../../store/posts/types'
import { loadPostsAsyncAction } from '../../store/posts/actions'
import { AppDispatch, AppState } from '../../store/store'
import { ButtonThumbDownIcon } from '../ButtonThumbDown/ButtonThumbDownIcon'
import { Navigate, useNavigate } from 'react-router-dom'
import { saveIdAction, startOpenAction } from '../../store/content/actions'
import { useOpenState } from '../../store/content/selectors'
import { Modal } from '../Modal/modal'
import { useFavorites } from '../../store/favorite/selectors'
import { addToFavoritesAction, addToFavoritesAsyncAction } from '../../store/favorite/actions'
import { useOpenModalState } from '../../store/modal/selectors'
import { clearImageAction, saveIdImageAction, startImageAction } from '../../store/modal/actions'
import { selectTheme } from '../../store/theme/selectors'
// import { setOpen } from '../../store/modal/actions'

export const CardPost1 = () => {
    // const { id } = useOpenState()
    // const { isOpened } = useSelector(openModal)
    // const dispatch = useDispatch()

    // if (!isOpened) {
    //     return null
    // }

    const { image } = useOpenModalState()
    const [isModalActive, setModalActive] = useState(false)

    const handleModalOpen = (key: any) => {
        // e.preventDefault()
        // if (e.target as HTMLImageElement) {
        //     // return
        //     console.log('тык сюда')
        // dispatch()
        // dispatch(saveIdAction(key))
        // dispatch(startOpenAction())

        setModalActive(true)
        dispatch(saveIdImageAction(key))
        dispatch(startImageAction())
        console.log(key)
        // }
    }

    const handleModalClose = () => {
        dispatch(clearImageAction())
        setModalActive(false)
    }

    const [state, setState] = useState(0)
    const [state1, setState1] = useState(0)

    const navigate = useNavigate()

    const increase = () => {
        setState(state + 1)
    }

    const increase1 = () => {
        setState1(state1 + 1)
    }

    const { postlist, limit, offset, page } = useSelector(selectPosts)
    const dispatch = useDispatch<AppDispatch>()

    // const imageUrl = useSelector((state: AppState) => state.modal.img)

    useEffect(() => {
        dispatch(loadPostsAsyncAction())
    }, [limit])

    const handleOpen = (key: any) => {
        console.log(key)
        dispatch(saveIdAction(key))
        dispatch(startOpenAction())
        navigate(`/content:id`)
    }

    const handleAddFavorite = (key: any) => {
        dispatch(addToFavoritesAction(key))
        console.log(key)
        dispatch(addToFavoritesAsyncAction())
        // dispatch(favoritesArrayAction())
    }

    // const { theme } = useSelector(selectTheme)

    return (
        // <div className={`${styles.cardContent} ${theme}`}>
        <div className={styles.cardContent}>
            {
                postlist.map((item, index) => (
                    <div key={item.id} className={styles.card} >
                        {/* <div key={item.id} className={styles.card}> */}
                        <div className={styles.allText}>
                            <div className={styles.text}>
                                <p className={styles.date}>
                                    {item.date}
                                </p>
                                <h1 className={styles.header} onClick={() => handleOpen(item.id)}>
                                    {item.title}
                                </h1>
                                <p className={styles.description}>
                                    {item.text}
                                </p>
                            </div>
                            <div>
                                <img className={styles.image} src={item.image} onClick={() => handleModalOpen(item.id)} />
                                {isModalActive && (
                                    <Modal onClose={handleModalClose}>
                                        <img className={styles.image1} src={image} />
                                    </Modal>
                                )}
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
                            <div className={styles.buttons}>
                                <button onClick={() => handleAddFavorite(item.id)}>
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

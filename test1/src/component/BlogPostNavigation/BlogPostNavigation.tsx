import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { loadPostsAsyncAction } from '../../store/posts/actions'
import { selectPosts } from '../../store/posts/selectors'
import { AppDispatch } from '../../store/store'
import { Pager } from '../Pager/Pager'
import { ArrowIcon } from './ArrowIcon'
import styles from './styles.module.scss'

export const BlogPostNavigation = () => {
    const dispatch = useDispatch<AppDispatch>()
    // const { page } = useSelector(selectPosts)
    const { postCount, page } = useSelector(selectPosts)

    const onPageClick = (page: number) => {
        dispatch(loadPostsAsyncAction(page))
    }

    const onNextPage = () => {
        dispatch(loadPostsAsyncAction(page + 1))
    }

    const onPrevPage = () => {
        if (page !== 1) {
            dispatch(loadPostsAsyncAction(page - 1))
        }
    }

    return (
        <div className={styles.navigation}>
            <div className={styles.page}>
                <div className={styles.prev}>
                    <ArrowIcon rotate={'rotate(180 12 12)'} />
                    <span onClick={() => onPrevPage()}>Prev</span>
                </div>
            </div>

            <div className={styles.numPage}>
                {/* <span className={styles.page} onClick={() => onPageClick(1)}>1</span>
                <span className={styles.page} onClick={() => onPageClick(2)}>2</span>
                <span className={styles.page} onClick={() => onPageClick(3)}>3</span>
                <span className={styles.page} onClick={() => onPageClick(4)}>...</span>
                <span className={styles.page} onClick={() => onPageClick(6)}>6</span> */}
                <Pager
                    postsCount={postCount}
                    postsPerPage={12}
                    currentPage={page}
                />
            </div>

            <div className={styles.page}>
                <div className={styles.prev}>
                    <span className={styles.page} onClick={() => onNextPage()}>Next</span>
                    <ArrowIcon />
                </div>
            </div>
        </div>
    )
}
import { current } from '@reduxjs/toolkit'
import styles from './styles.module.scss'
import React from 'react'
import { useDispatch } from 'react-redux'
import { loadPostsAsyncAction } from '../../store/posts/actions'
import { AppDispatch } from '../../store/store'

const getPageNumbers = (from: number, to: number) => {
    const res: string[] = []
    for (let i = from; i < to; i++) {
        res.push(i.toString())
    }
    return res
}

const getPages = (
    postCount: number, // количество постов
    postPerPage: number,
    currentPage: number
): string[] => {
    const pageCount = Math.ceil(postCount / postPerPage)
    const pages: string[] = []

    // всего 42
    // 1: 1 2 3 ... 42
    // 2: 1 2 3 4 ... 42
    // 3: 1 2 3 4 5 ... 42
    if (currentPage <= 4) {
        pages.push(...getPageNumbers(1, currentPage + 2 >= pageCount
            ? pageCount
            : currentPage + 2
        ))
        // const maxPage = currentPage + 2 >= pageCount

        // for (let i = 1; i <= maxPage; i++) {
        //     pages.push(i.toString())
        // }

        // текущая страница 4 + 3, страница 7
        if (currentPage + 3 < pageCount) {
            pages.push('...')
        }

        // текущая страница 4 + 2, страница 7
        if (currentPage + 2 < pageCount) {
            pages.push(pageCount.toString())
        }
    }

    // 4: 1 ... 2 3 4 5 6 ... 42
    // 5: 1 ... 3 4 5 6 7 ... 42
    // 6: 1 ... 4 5 6 7 8 ... 42
    // 7-37:
    // 38: 1 ... 36 37 38 39 40 ... 42
    // всего страниц 20: 1 2 3 4 
    // -> 5 6 7 16
    else if (currentPage > 4 && currentPage <= pageCount - 4) {
        pages.push(
            '1',
            '...',
            ...getPageNumbers(currentPage - 2, currentPage + 2),
            '...',
            pageCount.toString()
        )



        // for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        //     pages.push(i.toString())
        // }

        // pages.push('...', pageCount.toString())
    } else {
        // 39: 1 ... 37 38 39 40 41 42
        // 40: 1 ... 38 39 40 41 42
        // 41: 1 ... 39 40 41 42
        // 42: 1 ... 40 41 42

        pages.push(
            '1',
            '...',
            ...getPageNumbers(currentPage - 2, pageCount)
        )
        // for (let i = currentPage - 2; i < pageCount; i++) {
        //     pages.push(i.toString())
        // }
    }

    return pages
}

type Props = {
    postsCount: number,
    postsPerPage: number,
    currentPage: number
}

export const Pager = ({
    postsCount,
    postsPerPage,
    currentPage
}: Props) => {
    const pages = getPages(postsCount,
        postsPerPage,
        currentPage
    )
    const dispatch = useDispatch<AppDispatch>()

    const onPageClick = (page: number) => {
        dispatch(loadPostsAsyncAction(page))
    }

    // const pages = getPages(420, 10, 38)
    return (
        <div className={styles.page}>
            {
                pages.map((x) => (
                    <span
                        key={x === '...' ? x + 1 : x}
                        className={+x === currentPage ? `${styles.pageNumber} ${styles.active}` : styles.pageNumber}
                        onClick={() => onPageClick(+x)}
                    >
                        {isNaN(+x) ? x : +x}
                    </span>
                ))
            }
        </div>

        // <div className={styles.page}>
        //     {
        //         pages.map(x => (
        //             <>
        //                 {
        //                     isNaN(+x)
        //                         ? <span> {x} </span>
        //                         : <span onClick={() => onPageClick(+x)}> {x} </span>
        //                 }
        //             </>
        //         ))
        //     }
        // </div>
    )
}



import { useState } from 'react'
import styles from './styles.module.scss'
// import { Wrapper } from '../Menu/Wrapper'
import { UserInfo } from '../UserInfo/UserInfo'
import { Search } from '../Search/Search'
import { BurgerIcon } from '../Menu/BurgerIcon'
import { Link, NavLink } from 'react-router-dom'
import { Burger } from '../Menu/Burger'
import { SearchControl } from '../Search2/control/SearchControl'

export const Header = () => {

    // const [burgerClass, setBurgerClass] = useState()

    return (
        <>
            {/* <div className={styles.header}>
                <div className={styles.line}>
                    <BurgerIcon />
                </div>
            </div> */}

            <div className={styles.header}>
                {/* <Wrapper /> */}
                <Burger />
                {/* <Search /> */}
                <SearchControl />
                <UserInfo />

            </div>

            {/* ЭТО ДЛЯ НАВИГАЦИИ */}
            <nav className={styles.line}>

                {/* ПЕРЕГРУЖАЕТ СТРАНИЦУ */}
                {/* <a href="/">
                    Main
                </a>
                <a href="/signin">
                    Sign In
                </a> */}

                {/* НЕ ПЕРЕГРУЖАЕТ СТРАНИЦУ */}

                {/* <Link to='/'> Home </Link>
                <Link to='/signin'> Sign In </Link> */}

                {/* В ДАННОМ СЛУЧАЕ ДОБАВЛЯЕТСЯ ЕЩЕ КЛАСС ACTIVE */}
                <NavLink to='/'> Home </NavLink>
                <NavLink to='/signin'> Sign In </NavLink>
                <NavLink to='/addpost'>Add Post</NavLink>
                <NavLink to='/favorites'>Favorites</NavLink>
            </nav>
        </>
    )
}

// export const Header = () => {

//     const [burgerClass, setBurgerClass] = useState()

//     return (
//         <div className={styles.header}>
//             <nav>
//                 <div className={styles.burgerMenu}>
//                     <div className={styles.burgerClass}></div>
//                     <div className={styles.burgerClass}></div>
//                     <div className={styles.burgerClass}></div>
//                     <div className={styles.burgerClass}></div>
//                 </div>
//             </nav>
//         </div>
//     )
// }

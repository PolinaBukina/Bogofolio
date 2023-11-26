import { useState } from 'react'
import styles from './styles.module.scss'
import { Wrapper } from '../Menu/Wrapper'
import { UserInfo } from '../UserInfo/UserInfo'
import { Search } from '../Search/Search'

export const Header = () => {

    // const [burgerClass, setBurgerClass] = useState()

    return (
        <div className={styles.header}>
            <Wrapper />
            <Search />
            <UserInfo name={'Polina Bukina'} symbols={'PB'} />
        </div>
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

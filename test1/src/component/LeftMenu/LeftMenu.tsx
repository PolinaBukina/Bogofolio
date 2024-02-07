import { useSelector } from 'react-redux'
import styles from './styles.module.scss'
import { selectMenu } from '../../store/menu/selectors'
import { UserInfo } from '../UserInfo/UserInfo'
import { ThemeButtons } from '../ThemeButtons/ThemeButtons'
import { ButtonSecondary } from '../ButtonSecondary/ButtonSecondary'
import { NavLink } from 'react-router-dom'
import { RequireAuth } from '../../helpers/RequireAuth'
import { useAuthState } from '../../store/auth/selectors'
import { selectTheme } from '../../store/theme/selectors'

const LeftMenu = () => {
    const { isOpened } = useSelector(selectMenu)
    const { isAuthhorized } = useAuthState()

    if (!isOpened) {
        return null
    }

    // const [data, setData] = useState<BlogPostType[]>([])
    // const url = 'https://mockside.vercel.app/api/images/?limit=4'

    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(res => setData(res.items))
    // }, [])

    // return (
    //     <div>
    //         {
    //             data.map(item => (
    //                 <div>
    //                     <img src={item.url} alt="картинка" />
    //                 </div>
    //             ))
    //         }
    //     </div>
    // )

    return (
        <div className={styles.menu} >
            <ul >
                {
                    isAuthhorized && (
                        <UserInfo />
                    )
                }

                {/* {data.map((item, index) => (
                    <button className={styles.button}>
                        <li key={index}>{item}</li>
                    </button>
                ))} */}
                {/* <NavLink to='/'>
                    <button className={styles.button}>
                        <li>Home</li>
                    </button>
                </NavLink>
                <NavLink to='/addpost'>
                    <button className={styles.button}>
                        <li>Add post</li>
                    </button>
                </NavLink> */}
                <button className={styles.button}>
                    <NavLink to='/' >
                        <li>Home</li>
                    </NavLink>
                </button>
                <button className={styles.button}>
                    <NavLink to='/addpost'>
                        <li>Add post</li>
                    </NavLink>
                </button>
            </ul>
            <div>
                <ThemeButtons />
                <NavLink to='/signin'>
                    <ButtonSecondary name={'Sign In'} />
                </NavLink>
            </div>
        </div>
    )
}

export default LeftMenu

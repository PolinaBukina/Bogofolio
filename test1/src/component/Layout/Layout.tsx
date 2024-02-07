import React, { ReactNode, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useThemeContext } from '../../helpers/themeContext'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../store/theme/selectors'
import LeftMenu from '../LeftMenu/LeftMenu'
import { selectMenu } from '../../store/menu/selectors'
import { CardPost3 } from '../CardPost3/CardPost3'

const Layout = () => {
    // const themeCtx = useThemeContext()
    const { theme } = useSelector(selectTheme)
    const { isOpened } = useSelector(selectMenu)

    return (
        <div className={theme}>
            <Header />
            <LeftMenu />
            <main className='main'>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default Layout
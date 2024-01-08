import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setTabAction } from '../../store/tabs/actions'
import { selectTabs } from '../../store/tabs/selectors'
import styles from './styles.module.scss'

type Props = {
    text: string
    active?: boolean
    onTabClick: () => void
}

export const Tab = ({ text, active, onTabClick }: Props) => {
    const isActiveStyle = active ? styles.active : ''

    return (
        <div className={styles.tab + '' + isActiveStyle} onClick={onTabClick}>
            {text}
        </div>
    )
}

export const Tabs2 = () => {
    // const [activeTabIndex, setActiveTabIndex] = useState(0)
    // const tabs = ['All', 'My favorites', 'Popular']

    const { tabs, activeIndex, activeTab } = useSelector(selectTabs)
    const dispatch = useDispatch()

    const changeTabHandler = (index: number) => {
        //setActiveTabIndex(index)
        dispatch(setTabAction(index))
    }

    return (
        <div className={styles.all}>
            <div className={styles.tabsWrapper}>
                <div className={styles.tabs}>
                    {
                        tabs.map((currentTabName, index) => (
                            <Tab
                                key={currentTabName}
                                text={currentTabName}
                                active={index === activeIndex}
                                onTabClick={() => changeTabHandler(index)}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

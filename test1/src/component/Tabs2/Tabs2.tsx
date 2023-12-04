import React, { useState } from 'react'
import styles from './styles.module.scss'

type Props = {
    text: string
    active?: boolean
    onTabClick: () => void
}

export const Tab = ({ text, active, onTabClick}: Props) => {
    const isActiveStyle = active ? styles.active : ''

    return (
        <div className={styles.tab + '' + isActiveStyle} onClick={onTabClick}>
            {text}
        </div>
    )
}

export const Tabs2 = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0)
    const tabs = ['All', 'My favorites', 'Popular']

    const changeTabHandler = (index: number) => {
        setActiveTabIndex(index)
    }

    return (
        <div className={styles.tabWrapper}>
            {
                tabs.map((currentTabName, index) => (
                    <Tab 
                        key={currentTabName} 
                        text={currentTabName} 
                        active={index === activeTabIndex} 
                        onTabClick={() => changeTabHandler(index)}
                    />
                ))
            }
        </div>
    )
}

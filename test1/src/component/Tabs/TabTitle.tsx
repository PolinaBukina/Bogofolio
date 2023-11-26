import React from 'react'
import styles from './styles.module.scss'

type Props = {
    title: string
    index: number
    setSelectedTab: (index: number) => void
}

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index }) => {
    return (
        <li>
            <button onClick={() => setSelectedTab(index)}>{title}</button>
        </li>
    )
}

export default TabTitle

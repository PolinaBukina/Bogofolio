import React, { ReactElement, useState } from 'react'
import TabTitle from './TabTitle'
import styles from './styles.module.scss'

type Props = {
    children: ReactElement[]
}

const Tabs: React.FC<Props> = ({ children }) => {
    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <div className={styles.tabs}>
            <div className={styles.allTab}>
                <ul className={styles.tab}>
                    {children.map((item, index) => (
                        <TabTitle
                            key={index}
                            title={item.props.title}
                            index={index}
                            setSelectedTab={setSelectedTab}
                        />
                    ))}
                </ul>
            </div>
            {children[selectedTab]}
        </div>
    )
}

export default Tabs
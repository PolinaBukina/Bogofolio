import React from 'react'

type Props = {
    children: string
    title: string 
}

const Tab: React.FC<Props> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Tab

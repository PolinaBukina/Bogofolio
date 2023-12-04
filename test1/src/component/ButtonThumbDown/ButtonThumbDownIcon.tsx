import { Component } from 'react'
import { setConstantValue } from 'typescript'
import styles from './styles.module.scss'

type Props = {
    color?: string
}

export const ButtonThumbDownIcon = ({ color = '#313037' }: Props) => {

    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.6829 10.924C20.5699 11.552 20.0129 12.013 19.3529 12.001H17.6829V3.001H19.3709C20.0129 2.952 20.5689 3.448 20.6829 4.077V10.924ZM15.6829 12.788L12.0749 20.906C11.2679 20.648 10.6829 19.891 10.6829 19.001V15.001C10.6829 14.448 10.2349 14.001 9.68294 14.001H4.01394C3.96794 13.998 3.90694 13.999 3.84994 13.99C3.30494 13.907 2.92894 13.396 3.01094 12.852L4.39194 3.851C4.46594 3.361 4.91794 3.022 5.40294 3.001H15.6829V12.788ZM22.6739 3.866C22.4519 2.223 21.0469 1 19.4109 1C19.3919 1 19.3719 1 19.3529 1.001H5.41394C3.92694 1.011 2.63694 2.081 2.41494 3.549L1.03394 12.551C0.786937 14.186 1.91494 15.718 3.54694 15.966C3.70694 15.991 3.86994 16.003 4.02294 16.001H8.68294V19.001C8.68294 21.207 10.4769 23.001 12.6829 23.001C13.0789 23.001 13.4359 22.768 13.5969 22.407L17.3319 14.001H19.3349C21.0049 14.006 22.4489 12.798 22.6739 11.135C22.6799 11.091 22.6829 11.046 22.6829 11.001V4.001C22.6829 3.956 22.6799 3.911 22.6739 3.866Z"
                fill={color}
            />
        </svg>



    )
}
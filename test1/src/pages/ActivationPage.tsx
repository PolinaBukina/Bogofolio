import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AtivationPage = () => {
    const [uid, setUid] = useState('')
    const [token, setToken] = useState('')
    const navigate = useNavigate()

    const changeUid = (e: FormEvent<HTMLInputElement>) => {
        setUid(e.currentTarget.value)
    }
    const changeToken = (e: FormEvent<HTMLInputElement>) => {
        setToken(e.currentTarget.value)
    }
    const activate = () => {
        const request = new Request('https://studapi.teachmeskills.by/auth/users/activation/',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json' //обязательно мы здесь указываем в каком формате
                },
                body: JSON.stringify({
                    "uid": uid,
                    "token": token
                })
            }
        )
        fetch(request)
            .then(res => { //здесь можно добавить новые окошки
                alert(res.ok ? 'вы автивировались успешно' : 'есть ошибки')
                navigate('*')
            })
    }

    return (
        <div>
            <label htmlFor="">
                UID: <input type="string" value={uid} onInput={changeUid} />
            </label>

            <label htmlFor="">
                token: <input type="string" value={token} onInput={changeToken} />
            </label>

            <input type='button' value='Activate User' onClick={activate} />
        </div>
    )
}

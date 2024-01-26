import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { InputText } from '../../component/InputText/InputText'
import styles from './styles.module.scss'
import { ButtonPrimary } from '../../component/ButtonPrimary/ButtonPrimary'
import { ButtonSecondary2 } from '../../component/ButtonSecondary2/ButtonSecondary2'
import { ButtonSecondary } from '../../component/ButtonSecondary/ButtonSecondary'
import { CreatePostType } from '../../store/addpost/types'
import { createPostAction } from '../../store/addpost/actions'
import { useAppDispatch } from '../../helpers/useAppDispatch'

export const AddPostForm = () => {
    const [data, setData] = useState<Partial<CreatePostType>>({})
    const dispatch = useAppDispatch()

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            image: e.currentTarget.value
        })
    }

    const handleSendForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch(createPostAction({
            title: data.title || '',
            text: data.text || '',
            description: data.description || '',
            lesson_num: data.lesson_num || '',
            image: data.image || ''
        }))
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSendForm} className={styles.form}>
                <InputText
                    name={'Title'}
                    type={'text'}
                    placeholder={'Your title'}
                    value={data.title}
                    onChange={(text: string) => {
                        setData({
                            ...data,
                            title: text
                        })
                    }}
                />
                <div className={styles.numImg}>
                    <InputText
                        name={'Lesson number'}
                        type={'text'}
                        placeholder={'Your title'}
                        value={data.lesson_num}
                        onChange={(text: string) => {
                            setData({
                                ...data,
                                lesson_num: text
                            })
                        }}
                    />
                    <label>
                        Image
                        <input type={'file'} onChange={handleFileChange} className={styles.img} />
                    </label>
                </div>
                <InputText
                    name={'Description'}
                    type={'text'}
                    placeholder={'Your title'}
                    value={data.description}
                    onChange={(text: string) => {
                        setData({
                            ...data,
                            description: text
                        })
                    }}
                />
                <InputText
                    name={'Text'}
                    type={'text'}
                    placeholder={'Your title'}
                    value={data.text}
                    onChange={(text: string) => {
                        setData({
                            ...data,
                            text: text
                        })
                    }}
                />
                <div className={styles.buttons}>
                    <ButtonSecondary2 name={'Delete post'} />
                    <div className={styles.buttonsRight}>
                        <ButtonSecondary name={'Cancel'} />
                        <ButtonPrimary name={'Add Post'} />
                    </div>
                </div>
            </form>
        </div>
    )
}

// export default AddPostForm

// import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
// import { InputText } from '../../component/InputText/InputText'
// import styles from './styles.module.scss'
// import { ButtonPrimary } from '../../component/ButtonPrimary/ButtonPrimary'
// import { Title } from '../../component/Ttitle/Title'
// import { BackToHomeButton } from '../../component/BackToHomeButton/BackToHomeButton'
// import { ButtonSecondary2 } from '../../component/ButtonSecondary2/ButtonSecondary2'
// import { ButtonSecondary } from '../../component/ButtonSecondary/ButtonSecondary'
// import { TextArea } from '../../component/TextArea/TextArea'
// import { CreatePostType } from '../../store/addpost/types'
// import { useDispatch } from 'react-redux'
// import { createPostAction } from '../../store/addpost/actions'
// import { useAppDispatch } from '../../helpers/useAppDispatch'

// export const AddPostPage = () => {
//     // const inputRef = useRef<HTMLInputElement>(null)
//     const [data, setData] = useState<Partial<CreatePostType>>({}) // хранение данных
//     const dispatch = useAppDispatch()

//     // useEffect(() => {
//     //     inputRef.current?.focus()
//     // })

//     const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setData({
//             ...data,
//             image: e.currentTarget.value
//         })
//     }

//     const handleSendForm = (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault()

//         dispatch(createPostAction({
//             title: data.title || '',
//             text: data.text || '',
//             description: data.description || '',
//             lesson_num: data.lesson_num || '',
//             image: data.image || ''
//         }))
//     }


//     return (
//         <>
//             <div className={styles.container}>
//                 <div className={styles.title}>
//                     {/* <BackToHomeButton /> */}
//                     <p>Home <a href=''>| Add post</a></p>
//                     <Title name={'Add Post'} />
//                 </div>
//                 <form onSubmit={handleSendForm} className={styles.form}>
//                     {/* <div className={styles.allInputs}>
//                         <InputText name={'Title'} type={'text'} placeholder={'Astronauts prep for new solar arrays on nearly spacewalk'} ref1={inputRef} />
//                         <div className={styles.inputs}>
//                             <InputText name={'Lesson number'} type={'text'} placeholder={'20'} />
//                             <InputText name={'Image'} type={'text'} placeholder={'20'} />
//                             <ButtonSecondary name={'Upload New'} />
//                         </div>
//                         <TextArea name={'Description'} placeholder={'Add your text'} />
//                         <TextArea name={'Text'} placeholder={'Add your text'} />
//                     </div>
//                     <div className={styles.buttons}>
//                         <ButtonSecondary2 name={'Delete post'} />
//                         <div className={styles.buttonsRight}>
//                             <ButtonSecondary name={'Cancel'} />
//                             <ButtonPrimary name={'Add Post'} />
//                         </div>
//                     </div> */}

//                     <InputText
//                         name={'Title'}
//                         type={'text'}
//                         placeholder={'Your title'}
//                         value={data.title}
//                         onChange={(text: string) => {
//                             setData({
//                                 ...data,
//                                 title: text
//                             })
//                         }}
//                     />
//                     <div className={styles.numImg}>
//                         <InputText
//                             name={'Lesson number'}
//                             type={'text'}
//                             placeholder={'Your title'}
//                             value={data.lesson_num}
//                             onChange={(text: string) => {
//                                 setData({
//                                     ...data,
//                                     lesson_num: text
//                                 })
//                             }}
//                         />
//                         <label>
//                             Image
//                             <input type={'file'} onChange={handleFileChange} className={styles.img} />
//                         </label>
//                     </div>
//                     <InputText
//                         name={'Description'}
//                         type={'text'}
//                         placeholder={'Your title'}
//                         value={data.description}
//                         onChange={(text: string) => {
//                             setData({
//                                 ...data,
//                                 description: text
//                             })
//                         }}
//                     />
//                     <InputText
//                         name={'Text'}
//                         type={'text'}
//                         placeholder={'Your title'}
//                         value={data.text}
//                         onChange={(text: string) => {
//                             setData({
//                                 ...data,
//                                 text: text
//                             })
//                         }}
//                     />

//                     {/* <input type="submit" value="add post" /> */}

//                     <div className={styles.buttons}>
//                         <ButtonSecondary2 name={'Delete post'} />
//                         <div className={styles.buttonsRight}>
//                             <ButtonSecondary name={'Cancel'} />
//                             <ButtonPrimary name={'Add Post'} />
//                         </div>
//                     </div>

//                 </form>
//             </div>
//         </>
//     )
// }

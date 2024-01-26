import { Title } from '../../component/Ttitle/Title'
import { BackToHomeButton } from '../../component/BackToHomeButton/BackToHomeButton'
import { AddPostForm } from '../../component/AddPostForm/AddPostForm'

export const AddPostPage = () => {
    // const inputRef = useRef<HTMLInputElement>(null)
    // const [data, setData] = useState<Partial<CreatePostType>>({}) // хранение данных
    // const dispatch = useAppDispatch()

    // // useEffect(() => {
    // //     inputRef.current?.focus()
    // // })

    // const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setData({
    //         ...data,
    //         image: e.currentTarget.value
    //     })
    // }

    // const handleSendForm = (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()

    //     dispatch(createPostAction({
    //         title: data.title || '',
    //         text: data.text || '',
    //         description: data.description || '',
    //         lesson_num: data.lesson_num || '',
    //         image: data.image || ''
    //     }))
    // }


    return (
        <>
            {/* <div className={styles.container}> */}
            {/* <div className={styles.title}>
                {/* <p>Home <a href=''>| Add post</a></p>
                <NavLink to='/'>
                    Home
                </NavLink>
                <NavLink to='/addpost'>
                    | Add post
                </NavLink>

            </div> */}
            <BackToHomeButton />
            <Title name={'Add Post'} />
            <AddPostForm />

            {/* <form onSubmit={handleSendForm} className={styles.form}>
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

                    <input type="submit" value="add post" />

                    <div className={styles.buttons}>
                        <ButtonSecondary2 name={'Delete post'} />
                        <div className={styles.buttonsRight}>
                            <ButtonSecondary name={'Cancel'} />
                            <ButtonPrimary name={'Add Post'} />
                        </div>
                    </div>

                </form> */}
            {/* </div> */}
        </>
    )
}
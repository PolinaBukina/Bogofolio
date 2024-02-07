import { Title } from '../../component/Ttitle/Title'
import { BackToHomeButton } from '../../component/BackToHomeButton/BackToHomeButton'
import { AddPostForm } from '../../component/AddPostForm/AddPostForm'

export const AddPostPage = () => {

    return (
        <>
            <BackToHomeButton />
            <Title name={'Add Post'} />
            <AddPostForm />
        </>
    )
}
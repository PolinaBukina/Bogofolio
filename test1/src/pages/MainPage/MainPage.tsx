import { CardPost1 } from '../../component/CardPost1/CardPost1'
import { Tabs2 } from '../../component/Tabs2/Tabs2'
import { Title } from '../../component/Ttitle/Title'
import { BlogPostNavigation } from '../../component/BlogPostNavigation/BlogPostNavigation'

// НУЖНО ДОБАВИТЬ ЛИНК ДЛЯ КАЖДОЙ КАРТИНКИ ПОСТА
// СМОТРЕТЬ В react37 

export const MainPage = () => {
    return (
        <>
            <Title name={'Blog'} />
            <Tabs2 />
            <CardPost1 />
            <BlogPostNavigation />
        </>
    )
}
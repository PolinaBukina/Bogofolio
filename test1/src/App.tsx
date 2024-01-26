import './App.css';
import { ButtonPrimary } from './component/ButtonPrimary/ButtonPrimary';
import { ButtonSecondary } from './component/ButtonSecondary/ButtonSecondary';
import { ButtonSecondary2 } from './component/ButtonSecondary2/ButtonSecondary2';
import { ButtonWithIcon } from './component/ButtonWithIcon/ButtonWithIcon';
// import { Wrapper } from './component/Menu/Wrapper';
import { Header } from './component/Header/Header';
import Tabs from './component/Tabs/Tabs';
import Tab from './component/Tabs2/Tab';
import { CardPost1 } from './component/CardPost1/CardPost1';
import { CardPost2 } from './component/CardPost2/CardPost2';
import { CardPost3 } from './component/CardPost3/CardPost3';
import { MainPage } from './pages/MainPage/MainPage';
import { Tabs2 } from './component/Tabs2/Tabs2';
import { withBorder } from './component/HOC/withBorder';
import { ContentPage } from './pages/ContentPage/ContentPage'
import { Footer } from './component/Footer/Footer';
import { SignInPage } from './pages/SignInPage/SignInPage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { SuccessPage } from './pages/SuccesPage/SuccessPage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';
import { AddPostPage } from './pages/AddPostPage/AddPostPage';
import { MainPage2 } from './pages/MainPage2/MainPage2';
import { SearchPage } from './pages/SearchPage/SearchPage';
import { NewPassword } from './pages/NewPasswordPage/NewPasswordPage';
import { RequireAuth } from './helpers/RequireAuth';
import { ResetPage } from './pages/ResetPage/ResetPage';
import Layout from './component/Layout/Layout';
import { useThemeContext } from './helpers/themeContext';
import { Route, Routes } from 'react-router-dom';
import { Error404Page } from './pages/Error404Page/Error404';
import { ThemeButtons } from './component/ThemeButtons/ThemeButtons';
import { AtivationPage } from './pages/ActivationPage'
const tabs = [
  { aKey: 'all', title: 'All', content: 'a' },
  { aKey: 'myFavorites', title: 'My Favotites', content: 'b' },
  { aKey: 'popular', title: 'Popular', content: 'c' }
]

function App() {
  // const themeCtx = useThemeContext()
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* стартовый путь */}
        <Route index element={<MainPage />} />
        <Route path='mainpage2' element={<MainPage2 />} />
        <Route path='signin' element={<SignInPage />} />
        <Route path='signup' element={<SignUpPage />} />
        <Route path='register' element={<RegistrationPage />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='newpassword' element={<NewPassword />} />
        <Route path='addpost' element={
          <RequireAuth>
            <AddPostPage />
          </RequireAuth>
        } />
        <Route path='reset' element={<ResetPage />} />
        <Route path='succes' element={<SuccessPage />} />
        <Route path='content/:id' element={<ContentPage />} />
        <Route path='activate' element={<AtivationPage />} />
      </Route>

      <Route path='*' element={<Error404Page />} />

    </Routes>
    // <Layout>
    //   <NewPassword />
    // </Layout>
  )
}

export default App;

import './App.css';
import { ButtonPrimary } from './component/ButtonPrimary/ButtonPrimary'
import { ButtonSecondary } from './component/ButtonSecondary/ButtonSecondary'
import { ButtonSecondary2 } from './component/ButtonSecondary2/ButtonSecondary2'
import { ButtonWithIcon } from './component/ButtonWithIcon/ButtonWithIcon';
import { Wrapper } from './component/Menu/Wrapper'
import { Header } from './component/Header/Header'
import Tabs from './component/Tabs/Tabs'
import Tab from './component/Tabs/Tab'

// import { ButtonPrimary } from './component/ButtonPrimary/ButtonPrimary';
// import { ButtonSecondary } from './component/ButtonSecondary/ButtonSecondary'

const tabs = [
  { aKey: 'all', title: 'All', content: 'a' },
  { aKey: 'myFavorites', title: 'My Favotites', content: 'b' },
  { aKey: 'popular', title: 'Popular', content: 'c' }
]

function App() {
  return (
    <>
      <ButtonPrimary name={'Add post'} disabled={false} />
      <ButtonPrimary name='Sign in' disabled={false} />

      <ButtonSecondary name={'Secondary'} disabled={false} />

      <ButtonSecondary2 name={'Secondary 2'} disabled={false} />

      <ButtonWithIcon name={'Button with icon'} disabled={false} />

      {/* <header className={'header'}> */}
      {/* <Wrapper /> */}
      <Header />
      <Tabs>
        <Tab title="All">a</Tab>
        <Tab title="My favorites">b</Tab>
        <Tab title="Popular">c</Tab>
      </Tabs>
      {/* </header> */}


    </>
  )
}

export default App;

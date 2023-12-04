import './App.css';
import { ButtonPrimary } from './component/ButtonPrimary/ButtonPrimary';
import { ButtonSecondary } from './component/ButtonSecondary/ButtonSecondary';
import { ButtonSecondary2 } from './component/ButtonSecondary2/ButtonSecondary2';
import { ButtonWithIcon } from './component/ButtonWithIcon/ButtonWithIcon';
import { Wrapper } from './component/Menu/Wrapper';
import { Header } from './component/Header/Header';
import Tabs from './component/Tabs/Tabs';
import Tab from './component/Tabs/Tab';
import { CardPost1 } from './component/CardPost1/CardPost1';
import { CardPost2 } from './component/CardPost2/CardPost2';
import { CardPost3 } from './component/CardPost3/CardPost3';
import { Cards } from './component/Cards/Cards';
import { Tabs2 } from './component/Tabs2/Tabs2';
import { SignIn } from './component/SignIn/SignIn';
import { Success } from './component/Success/Success';
import { withBorder } from './component/HOC/withBorder';
import { ContentPage } from './component/ContentPage/ContentPage'
import { SignUp } from './component/SignUp/SignUp';

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
      {/* <ButtonPrimary name={'Add post'} disabled={false} />
      <ButtonPrimary name='Sign in' disabled={false} />

      <ButtonSecondary name={'Secondary'} disabled={false} />

      <ButtonSecondary2 name={'Secondary 2'} disabled={false} />

      <ButtonWithIcon name={'Button with icon'} disabled={false} /> */}

      {/* <header className={'header'}> */}
      {/* <Wrapper /> */}
      {/* <Header /> */}
      {/* <Tabs>
        <Tab title="All">a</Tab>
        <Tab title="My favorites">b</Tab>
        <Tab title="Popular">c</Tab>
      </Tabs> */}

      {/* <CardPost1
        image={'https://kartinki.pics/uploads/posts/2022-02/1645500476_1-kartinkin-net-p-kvadratnie-kartinki-1.jpg'}
        text={'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.'}
        date={'Aug 20, 2021'}
        title={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}
      /> */}
      {/* <CardPost2
        image={'https://kartinki.pics/uploads/posts/2022-02/1645500476_1-kartinkin-net-p-kvadratnie-kartinki-1.jpg'}
        text={'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.'}
        date={'Aug 20, 2021'}
        title={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}
      /> */}
      {/* <CardPost3
        image={'https://kartinki.pics/uploads/posts/2022-02/1645500476_1-kartinkin-net-p-kvadratnie-kartinki-1.jpg'}
        text={'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.'}
        date={'Aug 20, 2021'}
        title={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}
      /> */}

      {/* <Cards /> */}
      {/* </header> */}
      {/* <Tabs2 /> */}

      {/* <SignIn /> */}
      {/* <Success /> */}
      <ContentPage />
      {/* <SignUp /> */}

    </>
  )
}

export default App;

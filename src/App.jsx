import { useState , Routes , Route } from 'react'
import './App.css'
import { Main } from './Main/Main'
import { Nav } from './miniComponents/MiniComponent';
import { Media } from './Media/Media';
import { Location } from './Location/Location';
import { Contact } from './Contact/Contact';
import { Marketplace } from './MarketPlace/MarketPlace';
import { Brands } from './Brands/Brands';

function App() {
  const [homePage, setHomePage] = useState(0);

  return (
    <div>
      <Nav />
      <Main />
      <Marketplace />
      <Media />
      <Location />
      <Contact />
      <Brands />
    </div>

  )
}



export default App
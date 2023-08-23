
import './App.css';
import { useState } from 'react';
import SearchContainer from './components/searchContainer';
import Navbar from './components/navbar';


function App() {

  const [theme, setTheme] = useState('light');
  const [font, setFont] = useState('serif');

  // switch theme function
  function switchTheme() {
    setTheme('light' === theme ? 'dark' : 'light')
  }

  // switch font function
  function switchFont(event) {
    setFont(event.target.value)
  }

  return (
    <>
      <div className='app' data-theme={theme} data-font={font}>
        <header>
          <Navbar switchTheme={switchTheme} switchFont={switchFont} theme={theme} />
        </header>

        <main>
          <SearchContainer />
        </main>
      </div>
    </>
  )
}

export default App

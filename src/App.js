//COMPONENTS  
import Navbar from './components/Navbar'
import Main from './components/Main'
import Menu from './components/Menu'
import { useEffect, useState } from 'react';

function App() {

  const [menu, setMenu] = useState(false)
  useEffect(() => {
    menu ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = '' 
  }, [menu])

  return (
    <div className='App'>
      < Menu  menu={menu} setMenu={setMenu}/>
      < Navbar menu={menu} setMenu={setMenu}/>
      < Main />
    </div>
  );
}

export default App;

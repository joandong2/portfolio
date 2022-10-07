import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout:React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <div className={`main-container ${darkMode ? 'dark' : ''}`}>
      <Header />
      <main className='App'>
          <Outlet />
      </main>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default Layout
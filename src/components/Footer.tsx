import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

interface Props {
  darkMode: boolean,
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const Footer:React.FC<Props> = ({darkMode, setDarkMode}) => {

  const handleClick = () => {
    setDarkMode(!darkMode)
  }

  console.log('mode', darkMode);

  return (
    <section id="footer">
      <div className="mx-auto container px-4 flex flex-col md:flex-row justify-between">
        <div className="flex space-x-3 align-middle items-center">
          <p className="text-sm">&copy; 2022 All Rights Reserved.</p>
          <button onClick={handleClick} className="text-sm border px-2 hover:bg-white">{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
        </div>
        <div className="flex md:justify-between space-x-3">
          <p><AiOutlineMail /> <a href="mailto:johnoblenda@gmail.com">johnoblenda@gmail.com</a></p>
          <a className="text-lg" href="https://www.linkedin.com/in/john-oblenda/"><AiFillLinkedin /></a>
          <a className="text-lg" href="https://github.com/joandong2"><AiFillGithub /></a>
        </div>
      </div>
    </section>
  )
}

export default Footer
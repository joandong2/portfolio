import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

const Footer:React.FC = () => {
  return (
    <section id="footer">
      <div className="mx-auto container px-4 flex flex-col md:flex-row justify-between">
        <div>
          <p>&copy; 2022 All Rights Reserved.</p>
        </div>
        <div className="flex md:justify-between space-x-3">
          <p><AiOutlineMail /> <a href="mailto:johnoblenda@gmail.com">johnoblenda@gmail.com</a></p>
          <a href="/"><AiFillLinkedin /></a>
          <a href="/"><AiFillGithub /></a>
          <a href="/"><AiFillInstagram /></a>
        </div>
      </div>
    </section>
  )
}

export default Footer
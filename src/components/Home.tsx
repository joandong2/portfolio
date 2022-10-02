import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'

const Home:React.FC = () => {
  return (
    <div className="pb-32">
      <section id="main">
        <div className="mx-auto container">
          <div className="flex px-8 md:px-32 py-12 flex-col md:flex-row md:justify-between md:space-x-12 space-y-4">
            <div className="">
              <h2 className="uppercase text-8xl">Hello Everyone</h2>
            </div>
            <div className="">
              <p>I'm John, front end web developer..Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="mx-auto container">
          <h1>Projects</h1>
        </div>
      </section>
      <section id="about">
        <div className="mx-auto container">
          <div className="flex px-8 md:px-32 py-12 flex-col md:flex-row md:justify-between md:space-x-12 space-y-4">
            <div className="">
              <h2 className="uppercase text-8xl">About Me</h2>
            </div>
            <div className="">
              <p>I'm John, front end web developer..Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="mx-auto container">
          <div className="flex px-8 md:px-32 py-12 flex-col md:flex-row md:justify-between md:space-x-12 space-y-4">
            <div className="">
              <h2 className="uppercase text-8xl mb-8">Reach Out</h2>
              <div className="flex flex-col">
                <p className="mb-4"><AiOutlineMail /> <a href="mailto:johnoblenda@gmail.com">johnoblenda@gmail.com</a></p>
                <p className=""><AiOutlinePhone /> <a href="mailto:johnoblenda@gmail.com">+1 908 635 2191</a></p>
              </div>
            </div>
            <div className="">
              <p>I'm John, front end web developer..Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
import React from 'react'

const Home:React.FC = () => {
  return (
    <section id="main">
      <div className="mx-auto container min-h-[2000px]">
        <div className="flex px-8 md:px-32 py-12 flex-col md:flex-row md:justify-between md:space-x-12 space-y-4">
          <div className="">
            <h2 className="uppercase text-6xl">Hello Everyone</h2>
          </div>
          <div className="">
            <p>I'm John, front end web developer..Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
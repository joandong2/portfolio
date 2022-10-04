import React from 'react'
import { AiOutlineMail, AiOutlinePhone, AiTwotoneHome } from 'react-icons/ai'
import Projects from '../Projects'
import InquiryForm from './InquiryForm'

const Home:React.FC = () => {
  return (
    <div className="pb-32">
      <section id="main">
        <div className="mx-auto container">
          <div className="flex px-8 md:px-32 py-12 flex-col md:grid md:grid-cols-2 md:gap-x-2">
            <div className="">
              <h2 className="uppercase text-6xl"><span className="text-white">Hello</span> Everyone</h2>
            </div>
            <div className="">
              <p>I'm John Oblenda, front end web developer. I am interested with projects involving education and healthcare.</p>
            </div>
          </div>
        </div>
      </section>
      <Projects />
      <section id="about">
        <div className="mx-auto container">
          <div className="flex px-8 md:px-32 py-12 flex-col md:grid md:grid-cols-2 md:gap-x-2">
            <div className="text-left mb-8">
              <h2 className="uppercase text-6xl mb-12"><span className="text-white">About</span> Me</h2>
            </div>
            <div className="mb-8">
              <p>I'm John, front end web developer. I am interested with projects involving education and healthcare.</p>
            </div>
            <div className="text-left mb-6">
              <p className="max-w-[300px]"><img className="profile-picture" src="/proj3.jpg" alt=""/></p>
            </div>
            <div className="">
              <p className="uppercase text-white mb-8">Skills</p>
              <div className="flex flex-col space-y-2 mb-2">
                <div className="flex justify-between">
                  <p>HTML & CSS</p>
                  <p>80%</p>
                </div>
                <div className="relative h-[8px] border border-[#303030]">
                  <span className="absolute bg-[#909090] h-[6px] w-[80%] top-0 left-0"></span>
                </div> 
              </div>{/* end */}
              <div className="flex flex-col space-y-2 mb-2">
                <div className="flex justify-between">
                  <p>Javascript</p>
                  <p>50%</p>
                </div>
                <div className="relative h-[8px] border border-[#303030]">
                  <span className="absolute bg-[#909090] h-[6px] w-[50%] top-0 left-0"></span>
                </div> 
              </div>{/* end */}
              <div className="flex flex-col space-y-2 mb-2">
                <div className="flex justify-between">
                  <p>React</p>
                  <p>50%</p>
                </div>
                <div className="relative h-[8px] border border-[#303030]">
                  <span className="absolute bg-[#909090] h-[6px] w-[50%] top-0 left-0"></span>
                </div> 
              </div>{/* end */}
              <div className="flex flex-col space-y-2 mb-2">
                <div className="flex justify-between">
                  <p>Databases</p>
                  <p>50%</p>
                </div>
                <div className="relative h-[8px] border border-[#303030]">
                  <span className="absolute bg-[#909090] h-[6px] w-[50%] top-0 left-0"></span>
                </div> 
              </div>{/* end */}
              <div className="flex flex-col space-y-2 mb-2">
                <div className="flex justify-between">
                  <p>Wordpress</p>
                  <p>60%</p>
                </div>
                <div className="relative h-[8px] border border-[#303030]">
                  <span className="absolute bg-[#909090] h-[6px] w-[60%] top-0 left-0"></span>
                </div> 
              </div>{/* end */}
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="mx-auto container">
          <div className="flex px-8 md:px-32 py-12 flex-col md:grid md:grid-cols-2 md:gap-x-2">
            <div className="mb-8">
              <h2 className="uppercase text-6xl mb-8"><span className="text-white">Reach</span> Out</h2>
            </div>
            <div className="mb-8">
              <p></p>
            </div>
            <div className="mb-6">
              <div className="flex flex-col">
                <p className="mb-4">Looking forward meeting great people!</p>
                <p className="mb-4"><AiTwotoneHome /> Bridgewater, New Jersey</p>
                <p className="mb-4"><AiOutlineMail /> <a href="mailto:johnoblenda@gmail.com">johnoblenda@gmail.com</a></p>
                <p className=""><AiOutlinePhone /> +1 908 635 2191</p>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col">
                <InquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
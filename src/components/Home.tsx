import React from 'react'
import { AiOutlineMail, AiOutlinePhone, AiTwotoneHome } from 'react-icons/ai'
import Projects from './Projects'
import InquiryForm from './InquiryForm'

const Home:React.FC = () => {
  return (
    <div className="pb-32">
      <section id="main">
        <div className="mx-auto container">
          <div className="flex px-8 md:px-32 py-12 flex-col md:grid md:grid-cols-2 md:gap-x-20">
            <div className="mb-20">
              <h2 className="uppercase text-6xl"><span className="text-white">Hello</span> Everyone</h2>
            </div>
            <div className="mb-20"></div>
            <div className="">
              <p className="mb-8">I'm John Oblenda, front end web developer. I have 4+ yrs experienced in web development mostly doing Wordpress-based websites. I also completed a Full-stack Web Development program with BloomTech (formerly Lambda School). I'm have high interest with frontend as it keeps me very excited making interactive, featured-rich and beautifully crafted designs made into a website. I'm also very interested in projects concerning healthcare and education.</p>
            </div>
            <div className="">
              <div className="">
                <p className="uppercase text-white mb-2">Skills</p>
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
                    <p>55%</p>
                  </div>
                  <div className="relative h-[8px] border border-[#303030]">
                    <span className="absolute bg-[#909090] h-[6px] w-[55%] top-0 left-0"></span>
                  </div> 
                </div>{/* end */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Projects />
      <section id="contact">
        <div className="mx-auto container">
          <div className="flex px-8 md:px-32 py-12 flex-col md:grid md:grid-cols-2 md:gap-x-20">
            <div className="mb-8">
              <h2 className="uppercase text-6xl mb-8"><span className="text-white">Reach</span> Out</h2>
            </div>
            <div className="mb-8">
              <p></p>
            </div>
            <div className="mb-6">
              <div className="flex flex-col">
                <p className="mb-4">Looking forward to meet great people!</p>
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
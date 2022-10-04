import React from 'react'

const Projects:React.FC = () => {
  return (
    <>
        <section id="projects" className="p-20">
            <div className="mx-auto container">
            <p className="uppercase text-white mb-8">My Works</p>
            <div className="grid grid-cols-4">
            <div className="relative project">
                <img src="./projects/sai-kiran-anagani-5Ntkpxqt54Y-unsplash.jpg" alt="" />
                <div className="desc opacity-0 absolute bottom-0 px-4 py-2 w-full font-istok">
                    <p className="text-sm mb-0 leading-4 text-[#AAAAAA]">React Website</p>
                    <p className="text-[10px] leading-normal">Portfolio</p>
                </div>
                </div> {/** end */}
                <div className="relative project">
                <img src="./projects/halfcut-pokemon-WC_Qjaryv4Y-unsplash.jpg" alt="" />
                <div className="desc opacity-0 absolute bottom-0 px-4 py-2 w-full font-istok">
                    <p className="text-sm mb-0 leading-4 text-[#AAAAAA]">React Website</p>
                    <p className="text-[10px] leading-normal">Pokemon</p>
                </div>
                </div> {/** end */}
                <div className="relative project">
                <img src="./projects/ronnie-george-9gGvNWBeOq4-unsplash.jpg" alt="" />
                <div className="desc opacity-0 absolute bottom-0 px-4 py-2 w-full font-istok">
                    <p className="text-sm mb-0 leading-4 text-[#AAAAAA]">React Website</p>
                    <p className="text-[10px] leading-normal">Real-estate</p>
                </div>
                </div>
            </div>
            </div>
        </section>

        <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
            Vertically centered modal
        </button>

        <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <button type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body relative p-4">
                <p>This is a vertically centered modal.</p>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Projects
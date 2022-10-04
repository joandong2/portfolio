import React from 'react'

const projects_data  = [
    {
        "id": "1",
        "name": "React Website",
        "description": "Portfolio",
        "profile": "sai-kiran-anagani-5Ntkpxqt54Y-unsplash.jpg"
    },
    {
        "id": "2",
        "name": "React Website",
        "description": "Pokemon",
        "profile": "halfcut-pokemon-WC_Qjaryv4Y-unsplash.jpg"
    },
    {
        "id": "3",
        "name": "React Website",
        "description": "Real-estate",
        "profile": "ronnie-george-9gGvNWBeOq4-unsplash.jpg"
    },
]


const Projects:React.FC = () => {
  return (
    <>
        <section id="projects" className="p-20">
            <div className="mx-auto container">
            <p className="uppercase text-white mb-8">My Works</p>
                <div className="grid grid-cols-4">
                    {projects_data ? (
                        projects_data.map(project => (
                            <>
                                <div className="relative project" data-bs-toggle="modal" data-bs-target={`#modal-${project.id}`}>
                                    <img src={`./projects/${project.profile}`} alt={project.name} />
                                    <div className="desc opacity-0 absolute bottom-0 px-4 py-2 w-full font-istok">
                                        <p className="text-sm mb-0 leading-4 text-[#AAAAAA]">{project.name}</p>
                                        <p className="text-[10px] leading-normal">{project.description}</p>
                                    </div>
                                </div>
                                <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id={`modal-${project.id}`} aria-labelledby={`modal-${project.id}`} aria-modal="true" role="dialog">
                                    <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                                        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                                        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                            <button type="button"
                                            className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                            data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body relative p-4">
                                            <p>{project.name}</p>
                                            <p>{project.description}</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    ) : (
                        <h4>No projects posted..</h4>
                    )}
                </div>
            </div>
        </section>
    </>
  )
}

export default Projects
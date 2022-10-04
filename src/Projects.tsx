import React from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'

const projects_data  = [
    {
        "id": "1",
        "name": "React Website",
        "tagline": "made with React and Tailwind CSS",
        "description": "I used React and TailwindCss for this project.",
        "profile": "sai-kiran-anagani-5Ntkpxqt54Y-unsplash.jpg",
        "image": "portfolio.jpg",
        "url": '',
        "github": "https://github.com/joandong2/portfolio"
    },
    {
        "id": "2",
        "name": "React Website",
        "tagline": "My Pokedex",
        "profile": "halfcut-pokemon-WC_Qjaryv4Y-unsplash.jpg",
        "image": "pokemon.jpeg",
        "url": "https://pokedex-tau-eight.vercel.app/",
        "github": "https://github.com/joandong2/pokedex"
    },
    {
        "id": "3",
        "name": "React Website",
        "tagline": "Simple listing of properties",
        "profile": "ronnie-george-9gGvNWBeOq4-unsplash.jpg",
        "image": "real.jpg",
        "url": '',
        "github": "https://github.com/joandong2/real-estate"
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
                                    <div className="desc opacity-0 absolute bottom-0 px-4 py-2 w-full font-istok flex justify-between">
                                        <div>
                                            <p className="text-sm mb-0 leading-4 text-[#AAAAAA]">{project.name}</p>
                                            <p className="text-[10px] leading-normal">{project.tagline}</p>
                                        </div>
                                        <div>
                                            {project.url ? (
                                                <a className="text-2xl hover:text-white text-[#909090]" href={project.url} target="_blank" rel="noreferrer"><AiFillEye /></a>
                                                ) : (
                                                null
                                            )}
                                            <a className="text-2xl hover:text-white text-[#909090]" href={project.github} target="_blank" rel="noreferrer"><AiFillGithub /></a>
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
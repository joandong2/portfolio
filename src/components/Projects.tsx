import React from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

const projects_data = [
  {
    id: "1",
    name: "Portfolio",
    tagline: "React",
    description: "I used React and TailwindCss for this project.",
    profile: "sai-kiran-anagani-5Ntkpxqt54Y-unsplash.jpg",
    image: "portfolio.jpg",
    url: "",
    github: "https://github.com/joandong2/portfolio",
  },
  {
    id: "2",
    name: "Blog Listing",
    tagline: "Wordpress",
    profile: "markus-winkler-afW1hht0NSs-unsplash.jpg",
    url: "https://noypi.joblenda.me/",
    github: "https://github.com/joandong2/maga-zine",
  },
  {
    id: "3",
    name: "Shopping Website",
    tagline: "Woocommmerce + Wordpress",
    profile: "pexels-evg-kowalievska-1126993.jpg",
    url: "https://shoppi.joblenda.me/",
    github: "https://github.com/joandong2/shoppi",
  },
  {
    id: "4",
    name: "Pokedex",
    tagline: "React",
    profile: "halfcut-pokemon-WC_Qjaryv4Y-unsplash.jpg",
    image: "pokemon.jpeg",
    url: "https://pokedex-tau-eight.vercel.app/",
    github: "https://github.com/joandong2/pokedex",
  },
  {
    id: "5",
    name: "Property Listing",
    tagline: "React",
    profile: "ronnie-george-9gGvNWBeOq4-unsplash.jpg",
    url: "https://real-estate-jo.vercel.app/",
    github: "https://github.com/joandong2/real-estate",
  },
  {
    id: "6",
    name: "Marketing Website",
    tagline: "HTML/CSS",
    profile: "avel-chuklanov-Ks4t8IK8Kgw-unsplash.jpg",
    url: "https://educell-jo.vercel.app/",
    github: "https://github.com/Build-Week-International-S-S-W/Web-UI-John",
  },
];

const Projects: React.FC = () => {
  return (
    <>
      <section id="projects" className="p-12">
        <div className="mx-auto container">
          <p className="uppercase text-white mb-8">My Works</p>
          <div className="flex flex-col space-y-4 md:space-y-0 md:grid md:grid-cols-4">
            {projects_data ? (
              projects_data.map((project) => (
                <div key={project.id}>
                  <div
                    className="relative project"
                    data-bs-toggle="modal"
                    data-bs-target={`#modal-${project.id}`}
                  >
                    <img
                      src={`./projects/${project.profile}`}
                      alt={project.name}
                    />
                    <div className="desc opacity-0 absolute bottom-0 px-4 py-2 w-full font-istok flex justify-between">
                      <div>
                        <p className="text-sm mb-0 leading-4 text-[#AAAAAA]">
                          {project.name}
                        </p>
                        <p className="text-[10px] leading-normal">
                          {project.tagline}
                        </p>
                      </div>
                      <div className="space-x-1">
                        {project.url ? (
                          <a
                            className="text-2xl hover:text-white text-[#909090]"
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <AiFillEye />
                          </a>
                        ) : null}
                        <a
                          className="text-2xl hover:text-white text-[#909090]"
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <AiFillGithub />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h4>No projects posted..</h4>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

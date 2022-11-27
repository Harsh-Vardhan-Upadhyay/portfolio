import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import LogoCard from "./LogoCard";
import ProjectCard from "./ProjectCard";

export interface Project {
  name: string;
  tag: string;
  description: string;
  link: string;
  stack: string[];
}

const projectData: any = [
  {
    name: "Artemis",
    tag: "An Internal Portal",
    description:
      "It is an internal portal for a college event. This portal offers provides the admin to score to participants and get in-depth information about the ongoing events. It also provides information about the registered participants.",
    link: "https://srmkzilla.net/",
    stack: ["NextJS", "NextAPI", "TailwindCSS", "JWT", "TypeScript"],
  }
];
export default function Projects() {
  return (
    <div
      id="projects"
      className="pt-[120px] select-none -z-10 bg-gradient-to-b to-dark-background from-[#1F1F22] backdrop-blur-sm min-h-[100vh] min-w-screen "
    >
      <div className=" flex flex-col items-center justify-center min-w-screen">
        <Fade duration={2000}>
          <div>
            <h1 className="text-5xl font-black">Projects</h1>
          </div>
          <hr className="mt-8 mb-8 w-[100px] h-px bg-primary border-2 border-primary dark:bg-primary" />
        </Fade>
      </div>
      <Fade duration={3000}>
        
        <div id="default-carousel" className="relative" data-carousel="static">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img
                      className="select-none cursor-default"
                      width={40}
                      height={40}
                      alt={"Harsh"}
                      src="/projects/img/nike.png"
                    />
                </div>                
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img
                      className="select-none cursor-default"
                      width={40}
                      height={40}
                      alt={"Harsh"}
                      src="/projects/img/portfolio.png"
                    />
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                      className="select-none cursor-default"
                      width={40}
                      height={40}
                      alt={"Harsh"}
                      src="nike.png"
                    />
                </div>
            </div>
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            </div>
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>

      </Fade>
    </div>
  );
}

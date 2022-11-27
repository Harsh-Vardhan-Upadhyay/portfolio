import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import LogoCard from "./LogoCard";
const texts: string[] = [
  "CPP",
  "Figma",
  "Photoshop",
  "Git",
  "Python"
];
export default function Skills() {
  return (
    <div
      id="skills"
      className="select-none pt-[120px] bg-gradient-to-b from-dark-background to-[#1F1F22] backdrop-blur-sm min-h-[80vh] min-w-screen "
    >
      <div className=" flex flex-col items-center justify-center min-w-screen">
        <Fade duration={2000}>
          <div>
            <h1 className="text-5xl font-black text-white">Skills</h1>
          </div>
          <hr className="mt-8 mb-8 w-[100px] h-px bg-primary border-2 border-primary dark:bg-primary" />
        </Fade>
        <div className="flex flex-col item-center justify-center min-w-screen">
        <div className="grid grid-cols-9 gap-x-[90px] gap-y-[20px] min-w-screen mx-20 place-content-center place-items-center mt-10">
          {texts.map((skill, i) => {
            return <LogoCard key={skill} name={skill} sno={i} />;
          })}
        </div>
        </div>
      </div>
    </div>
  );
}

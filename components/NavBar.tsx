import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <nav
      className="sticky top-0 left-0 flex justify-between items-center h-15 max-w-screen
            font-black z-20 backdrop-blur-md bg-dark-background bg-opacity-50"
    >
      {/* <div className="flex justify-space items-center">
        <div className="m-5 h-10">
          <Image src="/face.png" alt="Memoji" height={50} width={50} />
        </div>
        <h1 className="text-md md:text-3xl hover:text-primary">Zaid</h1>
      </div> */}
      <div
        className="m-5 h-10"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {isHovering ? (
          <Image
            className=""
            src="/memoji.png"
            alt="Memoji"
            height={50}
            width={50}
          />
        ) : (
          <Image
            className=""
            src="/face.png"
            alt="Memoji"
            height={50}
            width={50}
          />
        )}
      </div>
      <div className="flex justify-end mx-10">
        <div className="flex justify-center items-center mx-4">
          <a href="#skills">
            <h3 className="hover:-translate-y-0.5 text-md md:text-xl cursor-pointer duration-200 hover:text-primary">
              Skills
            </h3>
          </a>
        </div>
        <div className="flex justify-center items-center mx-4">
          <a href="#projects">
            <h3 className="hover:-translate-y-0.5 text-md md:text-xl cursor-pointer duration-200 hover:text-primary">
              Projects
            </h3>
          </a>
        </div>
        <div className="flex item-center justify-center pl-10">
          <div className="mx-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Harsh-Vardhan-Upadhyay"
            >
              <svg
                className="fill-white hover:-translate-y-0.5 text-md md:text-xl cursor-pointer duration-200 hover:fill-primary"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
          <div className="mx-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/harsh-vardhan-u-484464205/"
            >
              <svg
                className="fill-white hover:-translate-y-0.5 text-md md:text-xl cursor-pointer duration-200 hover:fill-primary"
                width="30"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
          <div className="mx-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="#"
            >
              <svg
                className="fill-white hover:-translate-y-0.5 text-md md:text-xl cursor-pointer duration-200 hover:fill-primary"
                width="30"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M22 0h-20v24h14l6-6v-18zm-7 23h-12v-22h18v16h-6v6zm1-5h4.586l-4.586 4.586v-4.586zm-3 1h-8v1h8v-1zm0-3h-8v1h8v-1zm6-2v-1h-14v1h14zm0-4h-4v1h4v-1zm-6.006 1h-7.991l-.003-.789c-.003-.72-.006-1.615 1.314-1.92 1.483-.341 1.236-.418 1.158-.563-1.078-1.988-.71-3.173-.395-3.703.388-.651 1.089-1.025 1.923-1.025.827 0 1.523.368 1.91 1.011.545.904.409 2.222-.379 3.713-.105.196-.195.255 1.119.559 1.355.312 1.352 1.212 1.35 1.936l-.006.781zm-6.994-1h6c-.007-.547-.07-.626-.54-.734-.855-.198-1.629-.376-1.901-.972-.142-.311-.113-.66.087-1.039.61-1.151.758-2.146.407-2.729-.276-.458-.778-.526-1.053-.526-.48 0-.857.19-1.063.537-.352.59-.201 1.58.414 2.714.204.377.236.727.095 1.039-.269.598-1.036.774-1.847.962-.525.121-.593.202-.599.748zm13-2v-1h-4v1h4zm0-4h-4v1h4v-1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

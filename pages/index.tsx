import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import About from "../components/About";
import Landing from "../components/Landing";
import NavBar from "../components/NavBar";
import Skills from "../components/Skills";
import createScrollSnap from "scroll-snap";
import styles from "../styles/Home.module.css";
import Projects from "../components/Projects";
import { useState } from "react";

export default function Home() {
  const [windowWidth, setWidth] = useState(1400);

  useEffect(() => {
    setWidth(window.innerWidth);
  });

  console.log(windowWidth);
  // if (windowWidth < 1000) {
  //   return (
  //     <div>
  //       <div className="bg-gradient-to-t to-dark-background from-[#1F1F22] p-[40px] flex flex-col items-center justify-center min-h-screen min-w-screen">
  //         <Image src={"/sad-memoji.png"} alt="Zaid" width={200} height={200} />

  //         <span className="text-3xl font-bold text-center">
  //           This website is not optimised for small screens yet. <br />
  //           Please open on a PC/Laptop
  //         </span>
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <div className="bg-dark-background main-container min-h-screen min-w-screen">
      <div>
        <div className="snap-start h-screen z-10">
          <Landing />
        </div>
        <NavBar />
        <div className="flex flex-col snap-start h-screen z-0">
          <About />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Projects />
        </div>
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Created with ❤️ by Harsh
          </a>
        </footer>
      </div>
    </div>
  );
}

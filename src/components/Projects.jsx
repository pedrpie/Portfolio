import ProjectCG from "../assets/project-cg.png";
import ProjectST from "../assets/project-st.png";
import GitHubLogo from "../assets/github.png";
import { FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div
      id="projectsCard" 
      className="m-auto mt-10 rounded-xl"
      initial={{ x:-50, opacity: 0 }}
      animate={{ x: 0, opacity: 1}}
      transition={{ duration: 0.6 }}>
      <h1 className="text-3xl mb-5 ">Projetos em Destaque</h1>

      <div className="flex gap-10">
        <div id="project1">
          <img
            className="rounded-sm transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500"
            src={ProjectST}
            width={500}
            alt="Sorteador"
          />
          <h1 className="text-3xl mb-3 mt-5">Sorteador</h1>
          <p>
            Website onde você pode encontrar sprites de qualquer Pokemon a
            partir de seu nome.
          </p>
          <div className="flex">
            <a
                className="flex justify-center items-center w-29 m-auto mt-3"
                href="https://github.com/pedrpie/Sorteador"
                target="_blank">
                GitHub <img src={GitHubLogo} width={50} alt="" />
            </a>
            <a 
                href="https://pedrpie.github.io/Sorteador/" 
                target="_blank" 
                className="flex justify-center items-center w-29 m-auto mt-6">
                Demo <FaLaptopCode size={30} className="ml-3"/>
            </a>
          </div>
        </div>

        <div id="project2">
          <img
            className="rounded-sm transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500"
            src={ProjectCG}
            width={500}
            height={20}
            alt=""
          />
          <h1 className="text-3xl mb-3 mt-5">Click Game</h1>
          <p>
            Um jogo de tempo onde você precisa ter o máximo de cliques possíveis
            antes do tempo acabar.
          </p>
          <div className="flex">
            <a
                className="flex justify-center items-center w-29 m-auto mt-3"
                href="https://github.com/pedrpie/click-game"
                target="_blank">
                GitHub <img src={GitHubLogo} width={50} alt="" />
            </a>
            <a 
                href="https://pedrpie.github.io/click-game/" 
                target="_blank" 
                className="flex justify-center items-center w-29 m-auto mt-6">
                Demo <FaLaptopCode size={30} className="ml-3"/>

            </a>

          </div>
        </div>
      </div>
    </motion.div>
  );
}

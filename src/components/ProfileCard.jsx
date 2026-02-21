import ProfilePic from "../assets/profile.png"
import { motion } from "framer-motion"

export default function ProfileCard() {

    const info = {
        introduction: "Olá! Eu sou o Pedro",
        description: "Estudante de Análise e Desenvolvimento de Sistemas e formado em Técnico em Informática com uma grande paixão de desenvolver interfaces Web. Atualmente atuo como Desenvolvedor Front-End. Minhas principais stacks são Javascript, HTML, CSS, React, Next.js, Node.js, TailwindCSS e MongoDB."
    }

    return(
        <motion.div 
            id="profileCard" 
            className="border border-gray-500 max-w-200 m-auto mt-30 p-10 text-center rounded-xl hover:border-white hover:shadow-lg"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}>

            <img 
                className="m-auto rounded-full border-2 border-white mb-4" 
                src={ProfilePic} 
                width={300} 
                alt="Profile Pic" />
                
            <h1 className="text-4xl font-bold mb-3">{info.introduction}</h1>
            <p className="text-justify">{info.description}</p>
        </motion.div>
    )
}
import { motion } from 'framer-motion';

export default function Education() {

    const title = "Formação Acadêmica";

    const education = [{
        course: "Análise e Desenvolvimento de Sistemas",
        institution: "Universidade Federal do Rio Grande do Norte",
        date: "2026-momento"
    },
    {
        course: "Técnico em Informática integrado ao Ensino Médio",
        institution: "Centro Estatual de Educação Profissional Professora Amazonina Teixeira de Carvalho",
        date: "2023-2025"
    }]

    return(
        <motion.div 
            id="education" 
            className="border border-gray-500 rounded-xl hover:border-white"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}>
            <h1 className="text-3xl">{title}</h1>
            <div>
                {education.map((item, index) => (
                    <div key={index} className="mb-5">
                        <h1 className="text-3xl font-bold mt-3 mb-3">{item.course}</h1>
                        <h2 className="text-2xl mb-3">{item.institution}</h2>
                        <p>{item.date}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}
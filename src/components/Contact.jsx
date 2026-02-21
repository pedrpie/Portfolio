import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div 
      id="contact"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.2 }}>

      <h1 className="text-3xl mb-5">Entrar em Contato</h1>
      <div>
        <p>
          Em caso de dúvidas, interesse em colaborar, propor ou solicitar um
          projeto, entre em contato!
        </p>
        <div className="flex gap-5 justify-center mt-5">
          <Link
            id="contactLink"
            to="https://mail.google.com/mail/u/0/?to=pedrolcosta360@gmail.com&fs=1&tf=cm"
            target="_blank"
            className="text-2xl border border-white w-35 p-2 rounded-xl transition all hover:bg-white hover:text-black cursor-pointer">
            Email
          </Link>
          <Link
            id="contactLink"
            to="https://www.linkedin.com/in/pedro-costa-1374ba379/"
            target="_blank"
            className="text-2xl border border-white w-35 p-2 rounded-xl transition all hover:bg-white hover:text-black cursor-pointer">
            Linkedin
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

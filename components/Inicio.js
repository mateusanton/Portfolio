import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Image from 'next/image'
import mateus from '../public/mateus.png'

export const Inicio = () => {
  return (
    <section>
      <div className="text-center p-10">
        <h3 className="text-2xl dark:text-white">Oi, eu sou</h3>
        <div className="flex justify-center">
          <h2 className="text-5xl py-2 text-teal-700 font-medium md:text-6xl dark:text-teal-300">
            Mateus Masnik
            <span className="text-5xl font-medium md:text-6xl text-black dark:text-gray-400 -translate-y-1 ni">
              |
            </span>
          </h2>
        </div>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
          Desenvolvedor Full-Stack.
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400">
          Em busca de iniciar minha carreira como desenvolvedor Full-Stack
        </p>
      </div>

      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96">
        <Image src={mateus} alt="Eu" layout="fill" />
      </div>

      <div className="text-5xl flex justify-center gap-16 mt-5 py-3 text-gray-600  dark:text-white">
        <a
          href="https://www.linkedin.com/in/mateus-masnik-9b35971a3/"
          rel="noreferrer"
          target="_blank"
        >
          <AiFillLinkedin className="hover:animate-bounce hover:text-teal-400" />
        </a>
        <a
          href="https://github.com/mateusanton"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="hover:animate-bounce hover:text-teal-400" />
        </a>
      </div>
    </section>
  )
}

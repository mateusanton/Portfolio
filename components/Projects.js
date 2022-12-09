import Image from 'next/image'
import code from '../public/project1.png'
import filmslab from '../public/image.png'

export const Projects = () => {
  return (
    <section>
      <h2 className="mt-32 text-3xl text-center font-burtons text-teal-700 dark:text-teal-600">
        Projetos
      </h2>

      <div className="justify-center lg:grid grid-cols-3 gap-10 mt-5">
        <div className="justify-center text-center shadow-2xl p-10 rounded-xl grid grid-cols-1 dark:bg-gray-700 mt-5">
          <a
            className="hover:animate-pulse grid text-center justify-center"
            href="https://github.com/mateusanton/Films-Lib"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              className="w-96 text-center"
              src={filmslab}
              alt="Projeto de Filmes"
            />
            <p className="text-md py-5 leading-8 md:text-xl max-w-xl mx-auto text-teal-700 dark:text-teal-600 ">
              FilmsLib
            </p>
          </a>
        </div>
        <div className="justify-center text-center shadow-2xl p-10 rounded-xl flex dark:bg-gray-700 mt-5">
          <a className="hover:animate-pulse justify-center">
            <Image src={code} alt="" />
          </a>
        </div>
        <div className="justify-center text-center shadow-2xl p-10 rounded-xl flex dark:bg-gray-700 mt-5">
          <a className="hover:animate-pulse justify-center">
            <Image src={code} alt="" />
          </a>
        </div>
      </div>
      <br />
      <br />
    </section>
  )
}

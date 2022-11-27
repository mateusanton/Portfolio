import Image from 'next/image'
import code from '../public/project1.png'

export const Projects = () => {
  return (
    <section>
      <h2 className="mt-32 text-3xl text-center font-burtons text-teal-700 dark:text-teal-600">
        Projetos
      </h2>

      <div className="justify-center lg:grid grid-cols-3 gap-10 mt-5">
        <div className="justify-center text-center shadow-2xl p-10 rounded-xl flex dark:bg-gray-700 mt-5">
          <Image src={code} alt="" />
        </div>
        <div className="justify-center text-center shadow-2xl p-10 rounded-xl flex dark:bg-gray-700 mt-5">
          <Image src={code} alt="" />
        </div>
        <div className="justify-center text-center shadow-2xl p-10 rounded-xl flex dark:bg-gray-700 mt-5">
          <Image src={code} alt="" />
        </div>
      </div>
      <br />
      <br />
    </section>
  )
}

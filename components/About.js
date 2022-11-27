export const About= () => {
  return (
    <section className="justify-center lg:flex gap-10 mt-20">
    <div className="flex-1">
      <h2 className="text-3xl py-1 font-burtons text-teal-700 dark:text-teal-600 flex-1">Sobre mim</h2>
      <p className="text-md text-justify py-2 leading-8 text-gray-800 dark:text-gray-400 flex-1">Meu nome é Mateus Masnik, tenho 21 anos, estou sétimo periodo de Engenharia de Software, sempre trabalhei com hardware e atualmente estou em transição para a aréa de desenvolvimento. </p>
    </div>
    <div className="flex-1">
    <h2 className="text-3xl text-center py-1 font-burtons text-teal-700 dark:text-teal-600 flex-1">Tecnologias</h2>
    <div className="text-base font-medium dark:text-white">HTML/CSS</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div className="bg-gray-600 h-2.5 w-11/12 rounded-full dark:bg-gray-300" ></div>
      </div>
      <div className="text-base font-medium dark:text-white">JavaScript</div>
      <div className="w-full bg-gray-200  rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div className="bg-gray-600 h-2.5 w-4/5 rounded-full dark:bg-gray-300"></div>
      </div>
      <div className="text-base font-medium dark:text-white">React</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div className="bg-gray-600 h-2.5 w-4/6  rounded-full dark:bg-gray-300 " ></div>
      </div>
      <div className="text-base font-medium dark:text-white">Node.js</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div className="bg-gray-600 h-2.5 w-9/12  rounded-full dark:bg-gray-300 " ></div>
      </div>
      <div className="text-base font-medium dark:text-white">Git/Git Hub</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div className="bg-gray-600 h-2.5 w-8/12  rounded-full dark:bg-gray-300 " ></div>
      </div>
      </div>
    </section>
  )
}
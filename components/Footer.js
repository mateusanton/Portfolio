import { BiArrowToTop } from 'react-icons/Bi'

export const Footer = () => {
  return (
    <footer className="bg-gray-200 pb-5 flex dark:bg-gray-700 dark:text-white">
      <div className="font-medium ml-20">
        <p className="mt-2">E-mail para contato: mateusmasnik@gmail.com</p>
        <p>Feito por Mateus Masnik © 2022</p>
      </div>
      <div className="flex justify-end mr-10 flex-1">
        <a href="#inicio" className="mt-6 hover:animate-bounce">
          <BiArrowToTop size={25} />
        </a>
      </div>
    </footer>
  )
}

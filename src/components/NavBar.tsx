import React from 'react';
import CIcon from '@coreui/icons-react';
import { cilLemon } from '@coreui/icons';

export default function Header() {

  const goToSchedule = (href: string) => {
      window.location.href = href;
  }

  return (
    <header className="bg-black/90 backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
          <CIcon icon={cilLemon} width={30} className='bg-yellow-300'/>

            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-yellow-400 via-green-500 to-yellow-400 text-transparent bg-clip-text">
              XeroIT  
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#servicios" className="text-gray-300 hover:text-yellow-400 transition-colors">Servicios</a>
            <a href="#contacto" className="text-gray-300 hover:text-yellow-400 transition-colors">Contacto</a>
            <a href="#nosotros" className="text-gray-300 hover:text-yellow-400 transition-colors">Nosotros</a>
          </nav>
          <button 
            onClick={()=> goToSchedule("https://calendly.com/leandro-moren18/let-s-talk")} 
            className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-green-600 text-black font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Agenda una reunión
          </button>
        </div>
      </div>
    </header>
  );
}
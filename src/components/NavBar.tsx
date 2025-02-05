import React, { useState } from "react";
import CIcon from "@coreui/icons-react";
import { cilLemon, cibGmail, cilPhone, cilLocationPin } from "@coreui/icons";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const CORREO_EMPRESA:string = "mailto:quantica-consulting@gmail.com";
  const UBICACION_EMPRESA:string = "https://www.google.com/maps?q=AV. Siempre Viva 123";
  const WHATSAPP_EMPRESA:string = "https://wa.me/5491112345678";

  const toggleModal = () => {
    setOpen(!open);
  };

  const goToSchedule = (href: string) => {
    window.location.href = href;
  };

  return (
    <>
      <header className="bg-black/90 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <CIcon icon={cilLemon} width={30} className="bg-yellow-300" />

              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-yellow-400 via-green-500 to-yellow-400 text-transparent bg-clip-text">
                XeroIT
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#servicios"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Servicios
              </a>
              <span
                onClick={toggleModal}
                className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer"
              >
                Contacto
              </span>
              <a
                href="#nosotros"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Nosotros
              </a>
            </nav>
            <button
              onClick={() =>
                goToSchedule("https://calendly.com/leandro-moren18/let-s-talk")
              }
              className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-green-600 text-black font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Agenda una reunión
            </button>
          </div>
        </div>
      </header>

      {open && (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />
  
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center animate-bounce bg-yellow-300 sm:mx-0 sm:size-10">
                  <CIcon icon={cilLemon} width={30} className="bg-yellow-300" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                      Nuestros datos de contacto
                    </DialogTitle>
                    <div className="mt-2 flex m-1">
                      <CIcon icon={cibGmail}  width={14}/>
                      <a className="text-sm text-gray-500 p-1" href={CORREO_EMPRESA}>
                        quantica-consulting@gmail.com
                      </a>
                    </div>
                    <div className="mt-2 flex m-1">
                      <CIcon icon={cilPhone}  width={20}/>
                      <a className="text-sm text-gray-500 p-1" href={WHATSAPP_EMPRESA}>
                        Tel: +54 9 11 1234-5678
                      </a>
                    </div>
                    <div className="mt-2 flex m-1">
                      <CIcon icon={cilLocationPin}  width={20}/>
                      <a className="text-sm text-gray-500 p-1" href={UBICACION_EMPRESA}>
                        Ubicacion AV. Siempre Viva 123
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 sm:ml-3 sm:w-auto"
                >
                  Aceptar
                </button>
                
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      )}
    </>
  );
}

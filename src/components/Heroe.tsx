'use client'
import "@/styles/global.css";

export default function Heroe() {
  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8 ">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        style={{ filter: "brightness(0.2)" }}
      />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-white ring-1 ring-white hover:ring-white">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-pink-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Impúlsate a la cima del mundo digital
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
              Encontramos las soluciones para los <span>desafíos</span> más <span>complejos</span>.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              >
                Agenda una reunión
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-200">
                Descubre más <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

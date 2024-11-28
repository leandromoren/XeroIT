"use client";
import "@/styles/global.css";
import { GradientButton } from "./ui/GradientButton";
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Heroe() {
  return (
    <div>
      <div className="relative isolate max-h-max px-6 pt-14 lg:px-8">
        
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-black sm:text-7xl">
              Impúlsate a la cima del mundo digital
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
              Te ofrecemos servicio profesional <span>desafíos</span> más{" "}
              <span>complejos</span>.
            </p>
            <div className="mt-12 flex items-center justify-center gap-x-6">
              <GradientButton href="https://calendly.com/leandro-moren18/let-s-talk">
                Agenda una reunión
                <ArrowRight className="ml-2 h-4 w-4" />
              </GradientButton>
              
              <GradientButton
                href="https://calendly.com/leandro-moren18/let-s-talk"
                variant="secondary"
              >
                Descubre más
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

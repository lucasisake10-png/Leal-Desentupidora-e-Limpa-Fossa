
import React from 'react';
import { HelpCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-24 bg-white" id="quem-somos">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-2 text-mario-red font-black mb-4 uppercase tracking-tighter">
            <HelpCircle size={20} />
            <span>Sobre a Leal</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-black mb-10 leading-none">
            HERÓIS REAIS, <br />
            <span className="text-luigi-green">RESULTADOS REAIS.</span>
          </h2>
          
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
            <p>
              A Leal Desentupidora e Limpa Fossa é movida pelo compromisso de resolver o que outros não conseguem. Nossa equipe de especialistas combina décadas de experiência com as melhores tecnologias do mundo.
            </p>
            <p>
              Nossa mission é simples: <span className="text-black font-black">Localizar o invisível e desobstruir o seu caminho.</span> Atendemos residências, indústrias e fossas sépticas com a máxima dedicação e precisão em Palhoça.
            </p>
            <div className="p-8 bg-black text-white rounded-3xl relative overflow-hidden">
               <div className="relative z-10">
                 <p className="text-xl font-black leading-tight">"Transparência é o nosso alicerce. Cada serviço executado é feito com a lealdade que o nosso nome carrega."</p>
                 <p className="mt-4 text-xs font-black uppercase tracking-widest text-mario-red">— Equipe Especializada Leal</p>
               </div>
               <div className="absolute top-0 right-0 w-24 h-24 bg-luigi-green/20 rounded-full blur-2xl -mr-12 -mt-12"></div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="h-64 rounded-[40px] bg-gray-100 overflow-hidden border-2 border-black">
                <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover" alt="Trabalho de encanamento" />
              </div>
              <div className="h-48 rounded-[40px] bg-mario-red flex items-center justify-center p-8 text-center">
                <p className="text-4xl font-black text-white leading-none tracking-tighter">15+ ANOS DE EXPERIÊNCIA</p>
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <div className="h-48 rounded-[40px] bg-luigi-green flex items-center justify-center p-8 text-center">
                <p className="text-4xl font-black text-white leading-none tracking-tighter">24/7 SUPORTE TÉCNICO</p>
              </div>
              <div className="h-64 rounded-[40px] bg-gray-100 overflow-hidden border-2 border-black">
                <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover" alt="Equipamento especializado" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


import React from 'react';
import { Check, Star } from 'lucide-react';

const Benefits: React.FC = () => {
  const items = [
    { title: "Tecnologia", desc: "Localização sem quebra-quebra." },
    { title: "Garantia", desc: "90 dias de garantia em todos os reparos." },
    { title: "Preço Justo", desc: "Orçamento sem compromisso e preço competitivo." },
    { title: "Velocidade", desc: "Atendimento em até 1 hora em áreas urbanas." }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-black text-black leading-none mb-12">
              POR QUE SOMOS <br />
              <span className="text-mario-red">REFERÊNCIA NA REGIÃO</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
              {items.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-6 top-1 text-luigi-green">
                    <Check size={28} strokeWidth={4} />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-2 uppercase tracking-tighter">{item.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-black p-12 rounded-[48px] text-white flex flex-col justify-center h-full relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-mario-red -mr-16 -mt-16 rounded-full blur-3xl opacity-30"></div>
               <h3 className="text-4xl font-black leading-tight mb-8">
                 CHAME A <span className="text-luigi-green">LEAL</span> AGORA!
               </h3>
               <p className="text-xl text-gray-400 font-medium mb-12">
                 Não deixe o entupimento parar seu dia. Nossa equipe está equipada e pronta para a ação imediata em Palhoça e região.
               </p>
               <a 
                href="https://wa.me/5548999767003" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-black text-center text-xl font-black py-6 rounded-2xl hover:bg-luigi-green hover:text-white transition-all uppercase tracking-widest"
               >
                 CHAMAR NO WHATSAPP
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

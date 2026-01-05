
import React from 'react';
import { Droplets, Wrench, ShieldCheck, ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  const serviceCards = [
    {
      title: "Geofone Digital",
      description: "Localizamos vazamentos ocultos em canos de água através de tecnologia de ultrassom.",
      icon: <Droplets size={32} />,
      accent: "bg-mario-red"
    },
    {
      title: "Reparo Hidráulico",
      description: "Conserto imediato após a localização do vazamento, com garantia total do serviço.",
      icon: <Wrench size={32} />,
      accent: "bg-luigi-green"
    },
    {
      title: "Desentupimento",
      description: "Limpeza técnica de tubulações de esgoto e águas pluviais com equipamentos modernos.",
      icon: <ShieldCheck size={32} />,
      accent: "bg-black"
    }
  ];

  return (
    <div className="py-24 bg-black text-white" id="servicos">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black leading-none mb-6">
              SOLUÇÕES EM <br />
              <span className="text-luigi-green uppercase">ALTA PERFORMANCE</span>
            </h2>
          </div>
          <p className="text-gray-400 font-medium max-w-sm border-l-2 border-mario-red pl-6 mb-2">
            Utilizamos equipamentos de precisão milimétrica para diagnosticar o seu problema hidráulico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {serviceCards.map((card, idx) => (
            <div key={idx} className="group relative bg-white/5 border border-white/10 p-10 rounded-[32px] hover:bg-white hover:text-black transition-all duration-500 overflow-hidden">
              <div className={`w-16 h-16 ${card.accent} flex items-center justify-center rounded-2xl text-white mb-8 group-hover:scale-110 transition-transform`}>
                 {card.icon}
              </div>
              <h3 className="text-3xl font-black mb-4 tracking-tighter">{card.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-600 mb-10 font-medium text-lg leading-relaxed">{card.description}</p>
              
              <div className="flex justify-between items-center mt-auto">
                <span className="font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Ver Detalhes</span>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-black transition-colors">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

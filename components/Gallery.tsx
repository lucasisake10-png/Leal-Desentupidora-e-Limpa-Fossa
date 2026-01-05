
import React from 'react';

const Gallery: React.FC = () => {
  // Using the specific URLs provided by the user
  const images = [
    "https://rawcdn.githack.com/lucasisake10-png/site-advogado-aula/2f87304d39b3d7968ffd2c05f970d48ac6a4143a/Desentupidora.jpg", // 0
    "https://rawcdn.githack.com/lucasisake10-png/site-advogado-aula/2f87304d39b3d7968ffd2c05f970d48ac6a4143a/Desentupimento-de-canos-em-geral-DDS-Desentupidora.jpg", // 1
    "https://rawcdn.githack.com/lucasisake10-png/site-advogado-aula/2f87304d39b3d7968ffd2c05f970d48ac6a4143a/imagem_68105abadee4a5.89061726-1.webp", // 2 (Centerpiece)
    "https://rawcdn.githack.com/lucasisake10-png/site-advogado-aula/2f87304d39b3d7968ffd2c05f970d48ac6a4143a/tecnico-desobstruindo-o-dreno-com-cobra-ou-embolo_857340-11791.jpg", // 3
    "https://rawcdn.githack.com/lucasisake10-png/site-advogado-aula/2f87304d39b3d7968ffd2c05f970d48ac6a4143a/limpeza-de-fossa-abc-paulista-e1672661448801.jpg", // 4
    "https://rawcdn.githack.com/lucasisake10-png/site-advogado-aula/2f87304d39b3d7968ffd2c05f970d48ac6a4143a/desentupidora-em-oswaldo-cruz-servicos-rapidos-e-eficientes1.webp" // 5
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-black mb-6 uppercase tracking-tighter">
            Nossos <span className="text-mario-red">Trabalhos</span>
          </h2>
          <p className="text-gray-500 font-medium text-lg">
            Confira imagens reais dos nossos serviços de Desentupimento, Caça Vazamentos com Geofone e Limpa Fossa realizados em Palhoça e região.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Column 1 - Left */}
          <div className="md:col-span-1 flex flex-col gap-6">
             <div className="relative group overflow-hidden rounded-[32px] shadow-lg bg-gray-200">
               <img src={images[0]} alt="Serviço de Desentupimento Leal" className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                 <span className="text-white font-black text-sm uppercase tracking-widest">Desentupimento</span>
               </div>
             </div>
             <div className="relative group overflow-hidden rounded-[32px] shadow-lg bg-gray-200">
               <img src={images[1]} alt="Caça Vazamento Técnico" className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                 <span className="text-white font-black text-sm uppercase tracking-widest">Caça Vazamento</span>
               </div>
             </div>
          </div>

          {/* Centerpiece Column - Large Image */}
          <div className="md:col-span-2">
             <div className="relative group overflow-hidden h-full rounded-[48px] shadow-xl bg-gray-200 border-[8px] border-white">
                <img src={images[2]} alt="Obras Hidráulicas Profissionais" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10">
                  <span className="text-mario-red font-black text-xs uppercase tracking-[0.3em] mb-2">Equipe Leal</span>
                  <h3 className="text-white text-3xl font-black uppercase tracking-tighter">Hidráulica de Alta Precisão</h3>
                </div>
             </div>
          </div>

          {/* Column 3 - Right (Added an extra slot to fit all 6 images) */}
          <div className="md:col-span-1 flex flex-col gap-6">
             <div className="relative group overflow-hidden rounded-[32px] shadow-lg bg-gray-200">
               <img src={images[3]} alt="Equipamento Geofone Digital" className="w-full h-40 object-cover group-hover:scale-110 transition-all duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                 <span className="text-white font-black text-xs uppercase tracking-widest">Tecnologia Geofone</span>
               </div>
             </div>
             <div className="relative group overflow-hidden rounded-[32px] shadow-lg bg-gray-200">
               <img src={images[4]} alt="Limpeza de Fossa Séptica" className="w-full h-40 object-cover group-hover:scale-110 transition-all duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                 <span className="text-white font-black text-xs uppercase tracking-widest">Limpa Fossa</span>
               </div>
             </div>
             <div className="relative group overflow-hidden rounded-[32px] shadow-lg bg-gray-200">
               <img src={images[5]} alt="Atendimento Especializado" className="w-full h-40 object-cover group-hover:scale-110 transition-all duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                 <span className="text-white font-black text-xs uppercase tracking-widest">Atendimento 24h</span>
               </div>
             </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-[0.3em]">
            <div className="w-2 h-2 rounded-full bg-mario-red animate-ping"></div>
            Atendimento Imediato em Palhoça - SC
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

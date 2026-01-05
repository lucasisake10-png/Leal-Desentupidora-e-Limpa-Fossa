
import React from 'react';
import { ShieldCheck, Zap, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const profilePhotos = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80"
  ];

  return (
    <div className="relative bg-white overflow-hidden py-12 lg:py-24">
      {/* Professional background texture */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-3/5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-black text-white text-[10px] font-black uppercase tracking-widest mb-6">
              <Zap size={12} className="text-luigi-green" />
              Atendimento de Emergência 24h
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-black leading-[0.9] mb-8 tracking-tighter">
              LEAL <br />
              <span className="text-mario-red underline decoration-8 decoration-black underline-offset-8">HIDRÁULICA</span>
            </h1>
            
            <p className="text-xl text-gray-500 mb-10 max-w-xl font-medium leading-relaxed">
              Especialistas em Desentupimento, Limpa Fossa e Caça Vazamentos com tecnologia de ponta. Localização exata sem quebrar seu patrimônio.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#contato" className="bg-mario-red hover:bg-black text-white text-lg font-black py-5 px-10 rounded-xl shadow-xl transition-all flex items-center gap-3">
                CHAMAR TÉCNICO
                <ChevronRight size={20} />
              </a>
              <a href="#quem-somos" className="bg-white border-4 border-black text-black hover:bg-black hover:text-white text-lg font-black py-5 px-10 rounded-xl transition-all inline-block">
                SABER MAIS
              </a>
            </div>

            <div className="flex items-center gap-8 border-t border-gray-100 pt-8">
              <div className="flex items-center gap-2">
                <ShieldCheck size={24} className="text-luigi-green" />
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Garantia em Nota</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-3">
                  {profilePhotos.map((url, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                      <img src={url} alt={`Cliente satisfeito ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">+1000 Atendimentos</span>
              </div>
            </div>
          </div>

          <div className="lg:w-2/5 relative">
            <div className="relative group">
              {/* Main Image frame */}
              <div className="relative z-10 border-[12px] border-black rounded-[40px] overflow-hidden shadow-2xl bg-white">
                <img 
                  src="https://rawcdn.githack.com/lucasisake10-png/site-advogado-aula/93265644a660a24fbace0cd59633f34edeec18a9/2025-03-08.jpg" 
                  alt="Serviço de Hidráulica Leal em Banheiro" 
                  className="w-full h-auto transition-all duration-700"
                />
              </div>
              
              {/* High impact labels */}
              <div className="absolute -top-8 -right-8 bg-luigi-green text-white px-6 py-4 rounded-2xl shadow-2xl transform rotate-6 z-20">
                <p className="text-xs font-black uppercase tracking-widest opacity-80">Precisão</p>
                <p className="text-3xl font-black leading-none">100%</p>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-mario-red text-white px-6 py-4 rounded-2xl shadow-2xl transform -rotate-3 z-20">
                <p className="text-xs font-black uppercase tracking-widest opacity-80">Orçamento</p>
                <p className="text-2xl font-black leading-none">GRÁTIS*</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

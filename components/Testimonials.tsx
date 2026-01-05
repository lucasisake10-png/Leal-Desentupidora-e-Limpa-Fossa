
import React from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <div className="py-24 bg-white overflow-hidden relative">
      {/* Decorative background logo */}
      <div className="absolute right-0 top-0 opacity-5 -mr-48 scale-150 pointer-events-none">
        <div className="w-[800px] h-[800px] border-[100px] border-primary rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 text-primary font-bold mb-4">
              <Quote size={24} />
              <span>Recomendações</span>
            </div>
            <h2 className="text-4xl font-extrabold text-dark-navy mb-8 leading-tight uppercase">
              O que falam sobre a Leal!
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed mb-8">
               <p>Cada feedback é uma história de sucesso que nos enche de orgulho e nos motiva a continuar oferecendo excelência em nossos serviços. <span className="font-bold">Venha conferir o que estão dizendo sobre nós.</span></p>
               <p>Se você também precisa de serviços de qualidade e confiança como estes, entre em contato conosco pelo formulário ao lado agora mesmo!</p>
            </div>
            <a href="#contato" className="inline-block border border-primary text-primary px-8 py-3 rounded-md hover:bg-primary hover:text-white transition-all font-medium uppercase tracking-tight">
              Entre em contato agora mesmo
            </a>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-2xl relative">
              <p className="text-gray-600 italic mb-8 leading-relaxed">
                "Excelente serviço da Leal, tirou todas minhas dúvidas no contato, agendamos a visita, foi pontual e resolveu meu problema de vazamentos, que era uma dor de cabeça, já tentei solucionar com outra empresa, mas sem sucesso. Obrigado à equipe!"
              </p>
              <div>
                <h4 className="font-bold text-dark-navy text-lg">Carina Souza</h4>
                <p className="text-gray-400 text-sm">Hotel Por do Sol - Santa Isabel</p>
              </div>

              <div className="flex gap-4 mt-10">
                <button className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                  <ChevronLeft size={20} />
                </button>
                <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-opacity-90 transition-all">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

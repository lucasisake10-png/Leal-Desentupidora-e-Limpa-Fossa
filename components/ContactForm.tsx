
import React from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <div id="contato" className="bg-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-black rounded-[48px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Left Info Column */}
          <div className="lg:w-2/5 p-12 lg:p-20 text-white flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
            <h2 className="text-5xl font-black mb-10 leading-none">
              SOLICITE <br />
              <span className="text-mario-red">UMA VISITA</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-luigi-green mt-3"></div>
                <p className="font-bold text-gray-300">Orçamento rápido e detalhado.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-mario-red mt-3"></div>
                <p className="font-bold text-gray-300">Equipe técnica uniformizada e qualificada.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-white mt-3"></div>
                <p className="font-bold text-gray-300">Garantia total de serviço executado.</p>
              </div>
            </div>
            
            <div className="mt-20">
              <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Central de Atendimento</p>
              <p className="text-3xl font-black text-luigi-green">(48) 99976-7003</p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:w-3/5 p-12 lg:p-20 bg-white">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Nome Completo" 
                  className="w-full bg-gray-50 text-black rounded-xl px-6 py-4 outline-none border-2 border-transparent focus:border-black transition-all font-bold"
                />
                <input 
                  type="tel" 
                  placeholder="WhatsApp" 
                  className="w-full bg-gray-50 text-black rounded-xl px-6 py-4 outline-none border-2 border-transparent focus:border-mario-red transition-all font-bold"
                />
              </div>
              <select className="w-full bg-gray-50 text-gray-500 rounded-xl px-6 py-4 outline-none border-2 border-transparent focus:border-luigi-green transition-all font-bold appearance-none">
                <option>Tipo de Imóvel</option>
                <option>Casa / Sobrado</option>
                <option>Apartamento</option>
                <option>Empresa / Indústria</option>
                <option>Condomínio</option>
              </select>
              <textarea 
                placeholder="Qual o problema detectado?" 
                rows={4}
                className="w-full bg-gray-50 text-black rounded-xl px-6 py-4 outline-none border-2 border-transparent focus:border-black transition-all font-bold"
              ></textarea>
              
              <button className="w-full bg-black hover:bg-mario-red text-white font-black text-xl py-6 rounded-xl shadow-xl transition-all uppercase tracking-widest flex items-center justify-center gap-3">
                ENVIAR MENSAGEM
                <Send size={24} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

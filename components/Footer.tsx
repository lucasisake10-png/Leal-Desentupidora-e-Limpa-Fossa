
import React from 'react';
import { MapPin, Phone, Mail, Instagram, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <span className="text-4xl font-black tracking-tighter text-white mb-6 block">
              LEAL<span className="text-mario-red">.</span>
            </span>
            <p className="text-gray-500 font-bold text-sm leading-relaxed max-w-xs uppercase tracking-tight">
              Líder em desentupimento, limpa fossa e detecção eletrônica de vazamentos. Tecnologia e lealdade.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-8">Navegação</h4>
            <ul className="space-y-4 text-sm font-black uppercase tracking-widest">
              <li><a href="#home" className="hover:text-mario-red transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-luigi-green transition-colors">Serviços</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Orçamento</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-8">Atendimento</h4>
            <ul className="space-y-4 text-sm font-black">
              <li className="flex items-center gap-3 text-luigi-green">
                <Phone size={16} />
                (48) 99976-7003
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin size={16} />
                Palhoça - SC
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={16} />
                contato@lealdesentupidora.com
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Social</h4>
            <a href="#" className="flex items-center justify-between bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors">
              <span className="flex items-center gap-3 font-bold">
                <span className="text-mario-red"><Instagram size={20} /></span>
                Instagram
              </span>
              <ExternalLink size={16} className="text-gray-600" />
            </a>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">
             © 2024 LEAL DESENTUPIDORA E LIMPA FOSSA | CNPJ: 00.000.000/0001-00
           </div>
           <div className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">
             Design by <span className="text-white">Click Digital Hub</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

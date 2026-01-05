
import React from 'react';
import { Mail, Phone, Instagram, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-black text-white py-2 px-4 text-xs font-semibold">
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-6 flex-wrap">
            <span className="flex items-center gap-1.5 hover:text-mario-red transition-colors">
              <Mail size={14} className="text-mario-red" />
              contato@lealdesentupidora.com
            </span>
            <span className="flex items-center gap-1.5 hover:text-luigi-green transition-colors">
              <Phone size={14} className="text-luigi-green" />
              (48) 99976-7003
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <MapPin size={14} className="text-gray-400" />
              Palhoça - SC
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-mario-red transition-colors"><Instagram size={16} /></a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white border-b border-gray-100 py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-3xl font-black tracking-tighter leading-none text-black">
                LEAL<span className="text-mario-red">.</span>
              </span>
              <span className="text-[9px] font-black text-luigi-green uppercase tracking-[0.2em]">Desentupidora & Limpa Fossa</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-black font-bold text-sm uppercase tracking-wider">
            <a href="#home" className="hover:text-mario-red transition-colors">Início</a>
            <a href="#servicos" className="hover:text-luigi-green transition-colors">Serviços</a>
            <a href="#contato" className="bg-black text-white hover:bg-mario-red px-8 py-3 rounded-full shadow-lg transition-all">
              Orçamento Rápido
            </a>
          </div>
          
          <button className="md:hidden text-black p-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

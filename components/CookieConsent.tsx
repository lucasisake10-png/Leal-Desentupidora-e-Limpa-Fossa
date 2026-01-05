
import React, { useState } from 'react';

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-10px_30px_rgba(0,0,0,0.1)] p-4 sm:p-6 z-[100] border-t-2 border-primary">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-gray-600 text-xs sm:text-sm max-w-3xl">
          Utilizamos cookies para oferecer melhor experiência, melhorar o desempenho, analisar como você interage em nosso site e personalizar conteúdo.
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button 
            onClick={() => setVisible(false)}
            className="flex-1 sm:flex-none border border-gray-300 text-gray-500 px-4 py-2 rounded text-xs font-medium hover:bg-gray-50 transition-colors"
          >
            Customizar
          </button>
          <button 
            onClick={() => setVisible(false)}
            className="flex-1 sm:flex-none border border-gray-300 text-gray-500 px-4 py-2 rounded text-xs font-medium hover:bg-gray-50 transition-colors"
          >
            Rejeitar
          </button>
          <button 
            onClick={() => setVisible(false)}
            className="flex-1 sm:flex-none bg-primary text-white px-6 py-2 rounded text-xs font-bold hover:bg-opacity-90 transition-colors"
          >
            Aceitar Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

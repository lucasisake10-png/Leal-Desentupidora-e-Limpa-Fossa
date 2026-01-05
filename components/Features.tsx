
import React from 'react';
import { CheckCircle2, Layers } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Experiência Comprovada",
      desc: "Com anos de experiência no setor, nossa equipe possui o conhecimento e a expertise necessários para lidar com uma ampla gama de problemas hidráulicos, garantindo soluções eficazes e duradouras."
    },
    {
      title: "Emissão de Nota Fiscal",
      desc: "Somos uma empresa transparente e comprometida com a legalidade. Emitimos nota fiscal para todos os serviços prestados, garantindo transparência e conformidade com a legislação vigente."
    },
    {
      title: "Compromisso com a Satisfação do Cliente",
      desc: "Sua satisfação é nossa prioridade número um. Estamos empenhados em superar suas expectativas e garantir que você tenha uma experiência positiva ao lidar conosco."
    },
    {
      title: "Soluções Personalizadas",
      desc: "Reconhecemos que cada situação é única. Por isso, oferecemos soluções personalizadas adaptadas às necessidades específicas de cada cliente, garantindo resultados sob medida que atendam às suas expectativas."
    },
    {
      title: "Profissionalismo e Confiabilidade",
      desc: "Nosso compromisso é fornecer um serviço profissional e confiável em todas as interações com nossos clientes. Você pode confiar em nós para resolver seus problemas hidráulicos de maneira eficiente e eficaz."
    },
    {
      title: "Técnicos Qualificados:",
      desc: "Nossa equipe é composta por técnicos altamente qualificados e treinados, prontos para lidar com qualquer problema hidráulico que possa surgir. Estamos constantemente atualizando nossas habilidades e conhecimentos para fornecer o melhor serviço possível."
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-primary font-bold mb-2">
            <CheckCircle2 size={20} />
            <span>Eficiência Hidráulica</span>
          </div>
          <h2 className="text-4xl font-extrabold text-dark-navy mb-4">
            Serviços profissionais<br />e acessíveis.
          </h2>
          <div className="w-24 h-1 bg-primary mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-md border-t-8 border-primary hover:-translate-y-2 transition-transform duration-300">
              <Layers className="text-primary mb-6" size={32} />
              <h3 className="text-xl font-bold text-dark-navy mb-4 leading-tight">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;


import React from 'react';

const Differential = () => {
  const differentials = [
    {
      id: 1,
      title: "Expertise Técnica",
      description: "Especialistas em tecnologia e automação, com experiência real em transformar processos complexos em soluções eficientes."
    },
    {
      id: 2,
      title: "Soluções Personalizadas",
      description: "Criamos soluções personalizadas para atender exatamente às necessidades do seu negócio."
    },
    {
      id: 3,
      title: "Metodologia Ágil",
      description: "Aplicamos metodologias ágeis para entregar soluções rápidas, eficientes e com alta qualidade."
    },
    {
      id: 4,
      title: "Suporte Contínuo",
      description: "Garantimos suporte contínuo e acompanhamento dedicado para o sucesso da sua implementação."
    }
  ];

  return (
    <section id="diferencial" className="py-20 nexfy-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Nosso Diferencial</h2>
          <p className="max-w-2xl mx-auto">
            O que nos diferencia no mercado e por que escolher a Nexfy para 
            transformar digitalmente o seu negócio.
          </p>
          <div className="w-24 h-1 bg-white mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentials.map((item) => (
            <div 
              key={item.id}
              className="glass-effect p-8 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">
            Libertando empresas do trabalho manual
          </h3>
          <p className="max-w-3xl mx-auto text-lg">
           Somos tecnologia — e também estratégia.
           Criamos soluções que pensam, se conectam e evoluem, permitindo que sua empresa automatize processos e economize o recurso mais valioso: o tempo.
           Escolhas inteligentes escalam negócios.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Differential;

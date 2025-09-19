
import React from 'react';

const Clients = () => {
  // Nomes fictícios de empresas
  const clients = [
    'TechSolutions', 'Inovaware', 'Global Sistemas', 
    'Conecta Tech', 'InterData', 'ProcSoft', 
    'Tecnologia Express', 'Digital Flow'
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Empresas que Confiam em Nós</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Junte-se a mais de 500 empresas que já transformaram seus processos com a Nexfy.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="bg-white py-6 px-8 rounded-lg shadow-sm flex items-center justify-center min-w-[200px]"
            >
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-nexfy-blue mr-3"></div>
                <span className="font-semibold text-gray-700">{client}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

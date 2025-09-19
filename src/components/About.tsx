
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Conceito da Marca</h2>
          <div className="w-24 h-1 bg-nexfy-blue mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Quem somos
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
             Na Nexfy, automatizamos processos e impulsionamos negócios com tecnologia inteligente.
             Nossa identidade reflete inovação, fluidez e inteligência artificial — com um toque de futurismo e sofisticação.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
             Somos mais que tecnologia — somos estratégia.
             Criamos soluções inteligentes que pensam, se conectam e evoluem, ajudando sua empresa a automatizar processos e economizar o que há de mais valioso: o tempo.
             Para quem quer escalar com inteligência, é a escolha certa
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center">
                <h4 className="text-4xl font-bold text-nexfy-blue">+500</h4>
                <p className="text-gray-600">Clientes Satisfeitos</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-bold text-nexfy-blue">+1000</h4>
                <p className="text-gray-600">Projetos Entregues</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-bold text-nexfy-blue">98%</h4>
                <p className="text-gray-600">Taxa de Satisfação</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-bold text-nexfy-blue">24/7</h4>
                <p className="text-gray-600">Suporte Dedicado</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Card className="nexfy-gradient text-white p-8 rounded-lg shadow-xl">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold mb-6">Automatize e cresça!</h3>
                <p className="mb-6">
                  Sua empresa ainda perde tempo com tarefas manuais?
                </p>
                <p className="mb-6">
                  Automatizar processos não é só economizar — é crescer com eficiência e inteligência.
                </p>
                <p>
                  Imagine focar no que realmente importa enquanto o resto acontece sozinho.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
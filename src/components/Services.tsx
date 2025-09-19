
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Automação de Processos",
      description: "Automatizamos fluxos de trabalho repetitivos, liberando tempo para que sua equipe foque no que realmente importa.",
      icon: "📊"
    },
    {
      id: 2,
      title: "Transformação Digital",
      description: "Acompanhamos sua empresa na jornada de transformação digital, desde a estratégia até a implementação.",
      icon: "💻"
    },
    {
      id: 3,
      title: "Inteligência Artificial",
      description: "Implementamos soluções de IA personalizadas que aprendem com seus dados e otimizam suas operações.",
      icon: "🤖"
    },
    {
      id: 4,
      title: "Consultoria Estratégica",
      description: "Avaliamos seus processos atuais e desenvolvemos estratégias para melhorar a eficiência operacional.",
      icon: "📈"
    },
    {
      id: 5,
      title: "Desenvolvimento de Software",
      description: "Criamos soluções personalizadas que atendem às necessidades específicas do seu negócio.",
      icon: "⚙️"
    },
    {
      id: 6,
      title: "Integração de Sistemas",
      description: "Conectamos suas ferramentas e sistemas para que funcionem de forma harmoniosa e eficiente.",
      icon: "🔄"
    }
  ];

  return (
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas para automatizar e otimizar os processos da sua empresa, 
            gerando mais eficiência e resultados.
          </p>
          <div className="w-24 h-1 bg-nexfy-blue mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-8">
                <div className="text-4xl mb-4 bg-nexfy-light inline-block p-4 rounded-full group-hover:bg-nexfy-blue group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-nexfy-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

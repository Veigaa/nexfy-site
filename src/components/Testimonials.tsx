
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ana Silva",
      position: "CEO, TechCompany",
      content: "A parceria com a Nexfy transformou completamente nossos processos internos. Conseguimos reduzir o tempo gasto em tarefas administrativas em mais de 70%, permitindo que nossos colaboradores se concentrem em atividades estratégicas.",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      id: 2,
      name: "Carlos Santos",
      position: "Diretor de Operações, LogTech",
      content: "Implementamos as soluções da Nexfy há 6 meses e os resultados já são impressionantes. A automação dos nossos processos logísticos reduziu erros em 90% e aumentou nossa capacidade de processamento em 3x.",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 3,
      name: "Mariana Costa",
      position: "CTO, InnovateSoft",
      content: "A equipe da Nexfy é excepcionalmente talentosa e dedicada. Eles não apenas entenderam nossos desafios técnicos, mas também propuseram soluções inovadoras que superaram nossas expectativas. Recomendo fortemente!",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">O que Nossos Clientes Dizem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja os depoimentos de algumas empresas que transformaram seus negócios com as soluções da Nexfy.
          </p>
          <div className="w-24 h-1 bg-nexfy-blue mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                
                <blockquote className="text-gray-600 italic">
                  "{testimonial.content}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

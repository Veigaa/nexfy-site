import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url('/lovable-uploads/01f63a07-e5a0-4361-92fa-320f806be660.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center">
            <img 
              src="/lovable-uploads/17ca9a9d-46b8-4a02-936b-6d92e33ea32a.png" 
              alt="Nexfy Logo" 
              className="h-16 mr-4"
            />
            <h1 className="text-7xl font-bold">nexfy</h1>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Fluxos inteligentes, resultados reais
          </h2>
          
          <p className="text-xl mb-8 text-white/90">
             Na Nexfy, automatizamos processos e impulsionamos negócios com tecnologia inteligente.
             Nossa identidade reflete inovação, fluidez e inteligência artificial — com um toque de futurismo e sofisticação.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#servicos">
              <Button className="bg-white text-nexfy-blue hover:bg-gray-100 text-lg px-8 py-6">
                Conheça Nossos Serviços
              </Button>
            </a>
            <a href="#contato">
              <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-6">
                Entre em Contato
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
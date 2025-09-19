
import React from 'react';
import { Button } from "@/components/ui/button";
const Header = () => {
  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/17ca9a9d-46b8-4a02-936b-6d92e33ea32a.png" 
            alt="Nexfy Logo" 
            className="h-12"
          />
          <h1 className="text-2xl font-bold ml-2 text-nexfy-blue">nexfy</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#sobre" className="text-gray-700 hover:text-nexfy-blue transition-colors">
            Sobre
          </a>
          <a href="#servicos" className="text-gray-700 hover:text-nexfy-blue transition-colors">
            Serviços
          </a>
          <a href="#diferencial" className="text-gray-700 hover:text-nexfy-blue transition-colors">
            Diferencial
          </a>
          <a href="#contato" className="text-gray-700 hover:text-nexfy-blue transition-colors">
            Contato
          </a>
        </nav>
        
        <div>
          <a href="/DemoHero">
            <Button className="bg-nexfy-blue hover:bg-nexfy-darkblue text-white">
              Agende uma Demonstração
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

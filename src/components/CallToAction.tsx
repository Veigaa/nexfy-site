
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 nexfy-gradient text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para transformar sua empresa?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Automatize processos, economize tempo e aumente a eficiência do seu negócio com as soluções da Nexfy. 
          Entre em contato agora mesmo e agende uma demonstração gratuita.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-nexfy-blue hover:bg-gray-100 text-lg px-8 py-6">
            Solicitar Demonstração
          </Button>
          <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-6">
            <MessageCircle className="mr-2" />
            Falar com um Consultor
          </Button>
          
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

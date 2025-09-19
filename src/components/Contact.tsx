
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pronto para transformar seus processos e acelerar o crescimento do seu negócio? 
            Entre em contato conosco hoje mesmo.
          </p>
          <div className="w-24 h-1 bg-nexfy-blue mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Assunto</Label>
                <Input id="subject" placeholder="Assunto da mensagem" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea 
                  id="message" 
                  placeholder="Descreva como podemos ajudar você" 
                  rows={5}
                />
              </div>
              
              <Button className="w-full bg-nexfy-blue hover:bg-nexfy-darkblue text-white">
                Enviar Mensagem
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-nexfy-blue text-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Endereço</h4>
                  <p>Av. Paulista, 1000 - Bela Vista</p>
                  <p>São Paulo, SP - CEP: 01310-100</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Telefone</h4>
                  <p>(11) 93937-8648</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>contato@nexfy.com.br</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Horário de Atendimento</h4>
                  <p>Segunda à Sexta: 9h às 18h</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Agende uma Demonstração</h3>
              <p className="text-gray-600 mb-4">
                Quer ver na prática como a Nexfy pode transformar sua empresa? 
                Agende uma demonstração gratuita com nossa equipe.
              </p>
              <Button className="w-full bg-nexfy-blue hover:bg-nexfy-darkblue text-white">
                Agendar Demonstração
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

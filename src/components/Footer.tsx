
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/17ca9a9d-46b8-4a02-936b-6d92e33ea32a.png" 
                alt="Nexfy Logo" 
                className="h-10 mr-2" 
              />
              <h2 className="text-2xl font-bold">nexfy</h2>
            </div>
            <p className="text-gray-400">Fluxos inteligentes, resultados reais</p>
            <p className="mt-4 text-gray-400">
              Automatizando processos e transformando negócios por meio da tecnologia.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#diferencial" className="text-gray-400 hover:text-white transition-colors">Diferencial</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Automação de Processos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Transformação Digital</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Inteligência Artificial</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Consultoria Estratégica</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">contato@nexfy.com.br</li>
              <li className="text-gray-400">(11) 93937-8648</li>
              <li className="text-gray-400">São Paulo, SP</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="https://www.linkedin.com/company/nexfyio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="https://www.instagram.com/nexfyio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              <a href="https://wa.me/5511939378648" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Whatsapp</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nexfy. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

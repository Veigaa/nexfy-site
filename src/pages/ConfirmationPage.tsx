
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function ConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, date, time } = location.state || { name: "você", date: "a data selecionada", time: "o horário selecionado" };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="w-full max-w-lg mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="py-10 px-8 text-center">
          <div className="mx-auto mb-6 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-green-500" />
          </div>
          
          <h2 className="text-3xl font-bold text-primary mb-2">Demonstração Agendada!</h2>
          <p className="text-gray-600 mb-8">
            Obrigado por agendar uma demonstração conosco.
          </p>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <div className="space-y-4 text-left">
              <div>
                <h3 className="text-sm font-medium text-gray-600">Nome</h3>
                <p className="font-medium text-primary">{name}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-600">Data</h3>
                <p className="font-medium text-primary">{date}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-600">Horário</h3>
                <p className="font-medium text-primary">{time}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-2 mb-8">
            <p className="text-gray-600">
              Enviamos um email de confirmação com os detalhes da reunião.
            </p>
            <p className="text-gray-600">
              Você receberá um convite para o calendário em breve.
            </p>
          </div>
          
          <div className="space-y-3">
            <Button 
              onClick={() => navigate("/")}
              className="w-full bg-primary text-white"
            >
              Voltar para Página Inicial
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
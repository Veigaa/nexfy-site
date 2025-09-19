import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import HowItWorks from "./HowItWorks";
import Footer from "@/components/Footer";

const DemoHero = () => {
  const navigate = useNavigate();

  const dias = {
    Monday: "Segunda-feira",
    Tuesday: "Terça-feira",
    Wednesday: "Quarta-feira",
    Thursday: "Quinta-feira",
    Friday: "Sexta-feira",
    Saturday: "Sábado",
    Sunday: "Domingo",
  };

  const datasDisponiveis = [
    { date: "10 de Setembro", day: "Tuesday", slots: 5 },
    { date: "12 de Setembro", day: "Thursday", slots: 3 },
    { date: "15 de Setembro", day: "Monday", slots: 4 },
  ];

  return (
    <>
      <Header />

      <section className="w-full bg-gradient-to-b from-blue-50 to-white py-20 px-6 pt-28">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 mt-10 md:mt-0">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary">
              <span className="text-primary">Agende sua </span>
              <span className="text-primary">Demonstração </span>
              <span className="text-primary">Personalizada</span>
            </h2>
            <p className="text-lg text-gray-600">
              Veja nosso produto em ação com uma demonstração personalizada, adaptada às suas necessidades e requisitos específicos.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-nexfy-blue hover:bg-nexfy-blue text-white text-lg px-8 py-6"
                onClick={() => navigate("/schedule")}
              >
                Agende agora
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-primary/20 rounded-lg transform rotate-3"></div>
              <div className="relative bg-gray-200 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-600 mb-4">Próximas datas disponíveis</h3>
                <div className="space-y-3">
                  {datasDisponiveis.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-md">
                      <div>
                        <p className="font-medium">{dias[item.day]}, {item.date}</p>
                        <p className="text-sm text-gray-500">{item.slots} horários disponíveis</p>
                      </div>
                      <Button
                        variant="ghost"
                        className="text-primary hover:bg-nexfy-blue"
                        onClick={() => navigate(`/schedule/${item.date}`)}  // Passando a data como parâmetro
                      >
                        Ver
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <HowItWorks />

        <Footer />
      </section>
    </>
  );
};

export default DemoHero;

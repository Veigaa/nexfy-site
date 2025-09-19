import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Escolha a Data e Hora",
    description:
      "Selecione o melhor horário disponível conforme sua agenda para agendar uma demonstração.",
  },
  {
    number: "02",
    title: "Informe Suas Necessidades",
    description:
      "Responda um breve formulário para personalizarmos a demonstração conforme suas prioridades.",
  },
  {
    number: "03",
    title: "Receba o e-mail",
    description:
      "Você receberá um e-mail com o link da reunião, detalhes da agenda e um convite de calendário.",
  },
  {
    number: "04",
    title: "Participe da Demonstração",
    description:
      "No dia e hora marcados, acesse o link e veja o produto em ação, com um especialista disponível para tirar dúvidas.",
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 px-6 bg-white">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-primary mb-4">Como Funciona</h2>
      <p className="text-gray-600 text-lg mb-16">
        Veja como é simples agendar sua demonstração personalizada.
      </p>

      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-4 gap-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
          >
            <div className="w-14 h-14 rounded-full bg-nexfy-blue text-white flex items-center justify-center text-lg font-bold mb-4">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-100 shadow rounded-xl p-6 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-nexfy-blue text-white flex items-center justify-center text-lg font-bold mb-4 mx-auto">
              {step.number}
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm max-w-xs mx-auto">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
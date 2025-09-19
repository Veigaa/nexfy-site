
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DateSelector } from "./DateSelector.tsx";
import { TimeSelector } from "./TimeSelector";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { toast } from "sonner";

// Define form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Por favor, insira um email válido" }),
  company: z.string().min(2, { message: "Nome da empresa é obrigatório" }),
  jobTitle: z.string().min(2, { message: "Cargo é obrigatório" }),
  teamSize: z.string(),
  interests: z.string(),
  additionalInfo: z.string().optional(),
});

export default function ScheduleForm() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  // Mock available times
  const availableTimes = [
    "09:00",
    "10:00",
    "11:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
  ];

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      jobTitle: "",
      teamSize: "",
      interests: "",
      additionalInfo: "",
    },
  });

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!selectedDate || !selectedTime) {
      toast.error("Por favor, selecione data e hora para sua demonstração");
      return;
    }

    // In a real app, you would send this data to your backend
    console.log({
      ...values,
      date: selectedDate,
      time: selectedTime,
    });

    // Show success message and redirect
    toast.success("Demonstração agendada com sucesso!");
    navigate("/confirmation", { 
      state: { 
        name: values.name, 
        date: format(selectedDate, "PPPP"), 
        time: selectedTime 
      } 
    });
  }

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Agende Sua Demonstração</h2>
        
        <div className="mb-8">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 1 ? 'bg-primary text-white' : 'bg-blue-100 text-primary'}`}>
              1
            </div>
            <div className="h-1 flex-1 mx-2 bg-blue-100">
              <div className={`h-full bg-primary ${step === 1 ? 'w-0' : 'w-full'}`}></div>
            </div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 2 ? 'bg-primary text-white' : 'bg-blue-100 text-primary'}`}>
              2
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-sm font-medium">Selecione Data e Hora</span>
            <span className="text-sm font-medium">Suas Informações</span>
          </div>
        </div>
        
        {step === 1 ? (
          <div className="space-y-6">
            <DateSelector
              selectedDate={selectedDate}
              onDateChange={setSelectedDate}
            />
            
            {selectedDate && (
              <TimeSelector
                availableTimes={availableTimes}
                selectedTime={selectedTime}
                onTimeSelect={setSelectedTime}
                className="mt-6"
              />
            )}
            
            <div className="pt-6">
              <Button 
                className="w-full bg-primary text-white" 
                disabled={!selectedDate || !selectedTime}
                onClick={() => setStep(2)}
              >
                Próximo Passo
              </Button>
            </div>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Empresa</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite sua empresa" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="jobTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cargo</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu cargo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="teamSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tamanho da Equipe</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tamanho da sua equipe" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 funcionários</SelectItem>
                        <SelectItem value="11-50">11-50 funcionários</SelectItem>
                        <SelectItem value="51-200">51-200 funcionários</SelectItem>
                        <SelectItem value="201-500">201-500 funcionários</SelectItem>
                        <SelectItem value="500+">500+ funcionários</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="interests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>O que mais lhe interessa?</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione área de interesse" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="product-overview">Visão geral do produto</SelectItem>
                        <SelectItem value="specific-features">Funcionalidades específicas</SelectItem>
                        <SelectItem value="integration">Capacidades de integração</SelectItem>
                        <SelectItem value="pricing">Preços e planos</SelectItem>
                        <SelectItem value="other">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="additionalInfo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Informações Adicionais</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Há algo específico que você gostaria que abordássemos na demonstração?" 
                        className="h-24"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <Button type="button" variant="outline" onClick={() => setStep(1)}>
                  Voltar
                </Button>
                <Button type="submit" className="bg-primary text-white">
                  Agendar Demonstração
                </Button>
              </div>
            </form>
          </Form>
        )}
      </div>
      
      <div className="bg-blue-50 p-6 border-t border-blue-100">
        <div className="flex items-start space-x-4">
          <div className="bg-primary text-white p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-600">O que esperar</h4>
            <p className="text-sm text-gray-600 mt-1">
              Após o agendamento, você receberá um email de confirmação com detalhes da reunião e um convite para o calendário.
              As demonstrações geralmente duram de 30 a 45 minutos, incluindo tempo para perguntas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
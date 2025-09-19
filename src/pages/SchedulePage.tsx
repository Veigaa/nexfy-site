
import Header from "@/components/Header";
import ScheduleForm from "@/components/ScheduleForm";
import Footer from "@/components/Footer";

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex-1 py-12 px-6">
        <ScheduleForm />
      </div>
      <Footer />
    </div>
  );
}
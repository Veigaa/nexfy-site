
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TimeSelectorProps {
  availableTimes: string[];
  selectedTime: string | null;
  onTimeSelect: (time: string) => void;
  className?: string;
}

export function TimeSelector({
  availableTimes,
  selectedTime,
  onTimeSelect,
  className,
}: TimeSelectorProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <label className="text-sm font-medium text-primary">Selecione um Horário</label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {availableTimes.map((time) => (
          <Button
            key={time}
            variant="outline"
            className={cn(
              "justify-center",
              selectedTime === time
                ? "bg-primary text-white hover:bg-primary/90"
                : "bg-white hover:bg-blue-50"
            )}
            onClick={() => onTimeSelect(time)}
          >
            {time}
          </Button>
        ))}
      </div>
    </div>
  );
}
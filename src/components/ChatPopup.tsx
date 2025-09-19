import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([
    { text: "Olá! Como posso ajudar você hoje?", sender: "bot" },
  ]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (message: string) => {
    if (message.trim() === "") return;
    
    // Add user message
    setMessages((prev) => [...prev, { text: message, sender: "user" }]);
    
    // Simulate bot response (in a real app, this would be an API call)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Obrigado pela sua mensagem! Entraremos em contato em breve.", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className={cn(
          "flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300",
          isOpen ? "bg-red-500 hover:bg-red-600" : "bg-nexfy-darkgreen hover:bg-nexfy-darkgreen"
        )}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          "mt-4 w-full max-w-[350px] bg-white rounded-lg shadow-xl flex flex-col transition-all duration-300 origin-bottom-right",
          isOpen
            ? "opacity-100 scale-100 h-[450px]"
            : "opacity-0 scale-90 h-0 pointer-events-none"
        )}
      >
        <ChatHeader onClose={() => setIsOpen(false)} />
        <ChatMessages messages={messages} />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatPopup;
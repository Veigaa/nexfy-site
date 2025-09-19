import React from "react";
import { X } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
}

const ChatHeader = ({ onClose }: ChatHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-b  bg-nexfy-darkgreen text-white rounded-t-lg">
      <div className="flex items-center">
        <div className="h-2 w-2 rounded-full bg-nexfy-darkgreen mr-2"></div>
        <h3 className="font-medium">Chat de Atendimento</h3>
      </div>
      <button onClick={onClose} className="text-white hover:text-gray-200">
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ChatHeader;
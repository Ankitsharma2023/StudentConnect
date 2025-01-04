import { CheckCheck } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

interface Message {
  senderEmail: string;
  text: string;
  isRead: boolean;
}

interface ChatPopupProps {
  currentEmail:string
  isOpen: boolean;
  onClose: () => void;
  messages: Message[];
  addMessage: (message: string) => void;
  markAllMessagesAsRead: () => Promise<void>;
}

const ChatPopup: React.FC<ChatPopupProps> = ({ currentEmail,isOpen, onClose, messages, addMessage, markAllMessagesAsRead }) => {
  const [message, setMessage] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages.length, containerRef]);
   useEffect(() => {
        const interval = setInterval(() => {
          if(isOpen){
            markAllMessagesAsRead();
            }        
          }, 5000);
        return () => clearInterval(interval);
      }, [isOpen]);
  const handleSendMessage = () => {
    if (message.trim()) {
      addMessage(message);
      setMessage("");
    }
  };
  
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={onClose}
        ></div>
      )}

      {isOpen && (
        <div className="fixed bottom-5 right-5 bg-white shadow-lg rounded-lg w-80 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Chat</h3>
            <button onClick={onClose} className="text-gray-500">
              X
            </button>
          </div>

          <div className="mt-4 h-60 overflow-y-auto scrolling-y-container" id="container" ref={containerRef}>
            {messages.length > 0 ? (
              messages.map((msg, index) => {
                const isUser = currentEmail===msg.senderEmail;
                return (
                  <div
                    key={index}
                    className={`mb-2 p-2 rounded-lg w-1/2 flex flex-row justify-between ${isUser
                        ? "bg-violet-600 text-white ml-auto text-right"
                        : "bg-gray-600 text-white text-left"
                      } ${!msg.isRead && !isUser ? "bg-opacity-80" : ""}`}
                  >
                    <p className={`${isUser?"text-left":"text-right"}`}>{msg.text}</p>
                    {isUser && (
                      <span className={`text-xs  align-bottom h-full ml-2`}><CheckCheck size={18} color={msg.isRead?"lime":"white"}/></span>
                    )}
                  </div>
                )
              })
            ) : (
              <p className="text-gray-500">.</p>
            )}
            
          </div>

          <div className="flex mt-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 p-2 border rounded-l-md"
              placeholder="Type a message..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-violet-600 text-white px-4 py-2 rounded-r-md"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatPopup;

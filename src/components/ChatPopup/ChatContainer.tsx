'use client'
import React, { useEffect, useState} from "react";
import ChatPopup from "./ChatPopup";
import { Message } from "@prisma/client";
import { MessageCircle } from "lucide-react";
interface ChatContainerProps {
   currentEmail:string,
   recieverEmail:string,
   unreadCount:number, 
   msgs:{senderEmail:string, text: string; isRead: boolean }[]
   sendMessage: (newMessage: string)=>Promise<Message|null>

  }  

const ChatContianer: React.FC<ChatContainerProps> = ({currentEmail,recieverEmail,unreadCount,msgs,sendMessage}) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<{senderEmail:string, text: string; isRead: boolean }[]>(msgs);
  const [unreadMessageCount, setUnreadCount] = useState<number>(unreadCount);
  const toggleChat = async () => {
    setIsChatOpen(!isChatOpen);
  };

    const markRead=async ()=>{
      setMessages((prevMessages) =>
        prevMessages.map((msg) => ({ ...msg, isRead: true }))
      );
      const payload = {
        receiverEmail: recieverEmail,
        
      };
  
      
      await fetch("/student/api/markRead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), 
      });
  
    }
 
    const fetchMessages = async () => {
      const payload = {
        receiverEmail: recieverEmail,
        
      };
  
      
      const req = await fetch("/student/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), 
      });
  
      
      if (!req.ok) {
        throw new Error(`Request failed with status ${req.status}`);
      }
  
      
      const {messages,unreadCount} = await req.json();
      setUnreadCount(unreadCount);
      
      setMessages(messages)
      
    };

    
    useEffect(() => {
      
      fetchMessages();


      
      const interval = setInterval(() => {
        fetchMessages();
      }, 5000);

      
      return () => clearInterval(interval);
    }, [currentEmail]);
  const handleSendMessage = async (newMessage: string) => {
    if (newMessage.trim()) {
        setMessages((prevMessages) => [
            ...prevMessages,{senderEmail:currentEmail,text:newMessage,isRead:false}
          ]);
      await sendMessage(newMessage);
      
    }
  };


  return (
    <div>
      <button
        onClick={toggleChat}
        className="fixed bottom-5 right-5 bg-violet-600 text-white p-3 rounded-full shadow-lg"
      >
        <MessageCircle/>
        {unreadMessageCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {unreadMessageCount}
          </span>
        )}
      </button>

      <ChatPopup
        currentEmail={currentEmail}
        isOpen={isChatOpen}
        onClose={toggleChat}
        messages={messages}
        addMessage={handleSendMessage} 
        markAllMessagesAsRead={markRead} 
      />

    </div>
  );
};

export default ChatContianer;

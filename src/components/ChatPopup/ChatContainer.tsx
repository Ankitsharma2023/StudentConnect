'use client'
import React, { useState} from "react";
import ChatPopup from "./ChatPopup";
import { Message } from "@prisma/client";
interface ChatContainerProps {
   currentEmail:string,
   unreadCount:number, 
   msgs:{senderEmail:string, text: string; isRead: boolean }[]
   sendMessage: (newMessage: string)=>Promise<Message>
   markMessagesAsRead: ()=>Promise<void>
  }  

const ChatContianer: React.FC<ChatContainerProps> = ({currentEmail,unreadCount,msgs,sendMessage,markMessagesAsRead}) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<{senderEmail:string, text: string; isRead: boolean }[]>(msgs);
  const toggleChat = async () => {
    setIsChatOpen(!isChatOpen);
    if(isChatOpen){
        await markMessagesAsRead()
    }
  };

 

  const handleSendMessage = async (newMessage: string) => {
    if (newMessage.trim()) {
        setMessages((prevMessages) => [
            ...prevMessages,{senderEmail:currentEmail,text:newMessage,isRead:false}
          ]);
      const message = await sendMessage(newMessage);
      
    }
  };

  const handleMarkAsRead = async () => {
        await markMessagesAsRead();
      setMessages((prevMessages) =>
        prevMessages.map((msg) => ({ ...msg, isRead: true }))
      );
    
  };

  return (
    <div>
      <button
        onClick={toggleChat}
        className="fixed bottom-5 right-5 bg-violet-600 text-white p-3 rounded-full shadow-lg"
      >
        Chat
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Chat Popup Component */}
      <ChatPopup
        currentEmail={currentEmail}
        isOpen={isChatOpen}
        onClose={toggleChat}
        messages={messages}
        addMessage={handleSendMessage} // Send new message
        markAllMessagesAsRead={handleMarkAsRead} // Mark all messages as read
      />

    </div>
  );
};

export default ChatContianer;

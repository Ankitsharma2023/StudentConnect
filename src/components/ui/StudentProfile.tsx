import React from "react";
import { years } from "@/data/branches";
import Socials from "../Socials/SocialLinks";
import ChatContainer from "../ChatPopup/ChatContainer";
import { auth } from "@/auth";
import { getMessages, getUnreadMessageCount, sendMessage } from "../messages";
interface StudentProfileProps {
  student: {
    name: string;
    email:string;
    usn: string;
    photoURL: string|null;
    branch: string | '';
    year: number;
    tags: string[];
    about: string;
    linkedin: string|null;
    github: string|null;
    instagram: string|null;
    
  };
}

const StudentProfile: React.FC<StudentProfileProps> = async ({ student }) => {
  const session= await auth();
  const senderEmail =session?.user?.email??"";
  const receiverEmail=student.email;
  const sendM=async (newMessage: string)=>{
    'use server'
    if(senderEmail===receiverEmail){
      return null;
    }
    const message=await sendMessage(senderEmail,receiverEmail,newMessage);
    return message;
  } 
  
  const msg = await getMessages(senderEmail,receiverEmail);
  const unreadCount=await getUnreadMessageCount(senderEmail,receiverEmail);
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          
          <div className="flex items-center gap-6 mb-8">
            <div>
            <img className=" w-24 rounded-full flex items-center justify-center text-white text-2xl font-bold" src={student.photoURL||""} alt='Profile Photo' referrerPolicy="no-referrer"/>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{student.name}</h1>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">USN:</span>
                  <span className="font-medium text-violet-600">{student.usn}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Branch:</span>
                  <span className="font-medium text-violet-600">{student.branch}</span>
                </div>
              </div>
            </div>
          </div>

          
          <div className="mb-8">
            <span className="inline-block bg-violet-100 text-violet-800 px-4 py-1 rounded-full text-sm font-medium">
              {years[student.year-1]}
            </span>
          </div>

          
          <div className="flex flex-wrap gap-3 mb-8">
            {student.tags.map((tag, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>

          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">About</h2>
            <p className="text-gray-600 leading-relaxed">{student.about}</p>
          </div>

          
          <div className="flex justify-center items-center w-full">
          <Socials links={{github:student.github,linkedin:student.linkedin,instagram:student.instagram}}></Socials>
          </div>
        </div>
      </div>
      {senderEmail!==receiverEmail?
      <ChatContainer unreadCount={unreadCount} recieverEmail={student.email} currentEmail={session?.user?.email??""} msgs={msg} sendMessage={sendM} />:null}
    </div>
  );
};

export default StudentProfile;

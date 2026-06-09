'use server'
import db from "@/lib/db";



async function createConversation(senderEmail: string, receiverEmail: string) {
  const existingConversation = await db.conversation.findFirst({
    where: {
      participants: {
        hasEvery: [senderEmail, receiverEmail],

      },
    },
  });

  
  if (existingConversation) {
    return existingConversation;
  }

  
  const newConversation = await db.conversation.create({
    data: {
      participants: [senderEmail, receiverEmail],
    },
  });
  return newConversation;
}


export async function getConversationsForUser(userEmail: string) {
  const conversations = await db.conversation.findMany({
    where: {
      participants: {
        has: userEmail, 
      },
    },
    include: {
      messages: {
        orderBy: {
          sentAt: 'asc',  
        },
      },
    },
  });

  return conversations;
}


export async function getMessages(senderEmail: string, receiverEmail: string) {
  
  const conversation=await createConversation(senderEmail,receiverEmail);
  const messages =await db.message.findMany({
    where:{
      conversationId:conversation.id
    },
    select:{
      senderEmail:true,
      text:true,
      isRead:true,
    }
  })
  return messages ?? []; 
}


export async function sendMessage(senderEmail: string, receiverEmail: string, text: string) {
  const conversation=await createConversation(senderEmail,receiverEmail);
  const conversationId=conversation.id;
  const message = await db.message.create({
    data: {
      conversationId,
      senderEmail,
      receiverEmail,
      text,
      isRead: false,  
      isUser: true,   
    },
  });

  
  await db.conversation.update({
    where: { id: conversationId },
    data: {
      messages: {
        connect: { id: message.id },
      },
      unreadCount: {
        increment: 1, 
      },
    },
  });
  return message;
}


export async function markMessagesAsRead(userEmail: string,receiverEmail:string) {
  const conversation=await createConversation(userEmail,receiverEmail);
  const conversationId=conversation.id;
  await db.message.updateMany({
    where: {
      senderEmail: receiverEmail,
      receiverEmail: userEmail,  
      isRead: false,  
    },
    data: {
      isRead: true,  
    },
  });

  
  await db.conversation.update({
    where: { id: conversationId },
    data: {
      unreadCount: 0,  
    },
  });  
}


export async function getUnreadMessageCount(userEmail: string,receiverEmail:string) {
  const conversation=await createConversation(userEmail,receiverEmail);
  const conversationId=conversation.id
  const unreadCount = await db.message.findMany({
    where: {
      conversationId,
      senderEmail:receiverEmail,
      receiverEmail:userEmail,
      isRead:false
    },
  });
  return unreadCount.length || 0;  
}


import { auth } from '@/auth';
import { getMessages, getUnreadMessageCount } from '@/components/messages';
import { type NextRequest } from 'next/server'
 
export async function POST(request: NextRequest) {
  const session = await auth();
  const {receiverEmail}=await request.json();
  const senderEmail =session?.user?.email??"";
  const messages=await getMessages(senderEmail,receiverEmail)
  const unreadCount=await getUnreadMessageCount(senderEmail,receiverEmail);
  return Response.json({messages,unreadCount});
}
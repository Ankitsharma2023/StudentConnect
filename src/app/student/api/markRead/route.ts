import { auth } from '@/auth';
import { markMessagesAsRead } from '@/components/messages';
import { type NextRequest } from 'next/server'
 
export async function POST(request: NextRequest) {
  const session = await auth();
  const {receiverEmail}=await request.json();
  const senderEmail =session?.user?.email??"";
    await markMessagesAsRead(senderEmail,receiverEmail);
    return new Response(null,{status:200});
}
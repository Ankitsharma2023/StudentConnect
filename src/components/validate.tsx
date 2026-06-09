'use server'
import db from "@/lib/db";

export async function val(email:string,usn:string){
  const existingUser = await db.profile.findFirst({
    where: {
      usn: {
        equals: usn,
        mode: 'insensitive'
      }
    }
  });
      if(existingUser && existingUser.email!==email){
        return false;
      }
      return true;
      
    
    
};
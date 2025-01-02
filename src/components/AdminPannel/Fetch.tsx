'use server'
import db from "@/lib/db"
import { Profile, Suggestions, User } from "@prisma/client";

export default async function Fetch(model:string){
    let response:User[]|Profile[]|Suggestions[]|null=null;
    switch (model) {
        case 'users':
          response = await db.user.findMany();
          break
        case 'profiles':
          response = await db.profile.findMany();
          break
        case 'suggestions':
          response = await db.suggestions.findMany();
          break
        default:
          return
      }
      return response;
}
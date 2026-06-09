'use server'
import { StudentData } from "@/data/branches";
import db from "@/lib/db";

export async function create(data:StudentData){
    const existingUser = await db.profile.findUnique({
        where: { email: data.email || undefined },
      });
      if(existingUser){
        return
      }
      await db.profile.create({
        data: {
            name:data.name,
            email:data.email,
            usn:data.usn,
            photoURL:data.photoURL,
            branch:data.branch,
            year:data.year,
            tags:data.tags,
            about:data.about,
            linkedin:data.linkedin,
            github:data.github,
            instagram:data.instagram,

        },
    });
    
    
};
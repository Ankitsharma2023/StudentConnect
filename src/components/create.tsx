'use server'
import db from "@/lib/db";
interface StudentData {
  name: string;
  email:string;
  usn: string;
  photo: string|null;
  branch: string | '';
  year: number;
  tags: string[];
  about: string;
  linkedin: string;
  github: string;
  instagram: string;
}
export async function create(data:StudentData){
    const existingUser = await db.profile.findUnique({
        where: { email: data.email || undefined },
      });
      if(existingUser){
        return
      }
    const submission = await db.profile.create({
        data: {
            name:data.name,
            email:data.email,
            usn:data.usn,
            photoURL:data.photo,
            branch:data.branch,
            year:data.year,
            tags:data.tags,
            about:data.about,
            linkedin:data.linkedin,
            github:data.instagram,
            instagram:data.instagram,

        },
    });
    
    
};
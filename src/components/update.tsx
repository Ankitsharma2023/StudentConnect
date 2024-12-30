'use server'
import { StudentData } from "@/data/branches";
import db from "@/lib/db";



export async function update(data: StudentData) {
  const existingUser = await db.profile.findUnique({
    where: { email: data.email || undefined },
  });

  if (existingUser) {
    await db.profile.update({
      where: { email: data.email },
      data: {
        name: data.name,
        usn: data.usn,
        photoURL: data.photoURL,
        branch: data.branch,
        year: data.year,
        tags: data.tags,
        about: data.about,
        linkedin: data.linkedin,
        github: data.github,
        instagram: data.instagram,
      },
    });
    return { message: 'Profile updated successfully' };
  } else {

    
    return { message: 'no user' };
  }
}

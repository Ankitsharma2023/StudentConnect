import { auth, signOut } from "@/auth";
import { StudentCard } from "@/components/StudentCard/StudentCard";
import db from "@/lib/db";
import { notFound } from "next/navigation";

const HomePage = async () => {
 const session = await auth();
 if (!session) return notFound();
 const students=await db.profile.findMany();
 return (
   <main className="flex flex-col items-center gap-4 h-full bg-gradient-to-b from-emerald-50 to-emerald-100 text-black">
    <div className="flex w-full flex-row justify-around gap-2">
     <h1>Hello {session.user!.name}</h1>

     <form
       action={async () => {
         "use server";
         await signOut();
       }}
     >
       <button type="submit">Log Out</button>
     </form>
     </div>
     <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-4 gap-5">
     {students.map((studentData, index) => (
      <StudentCard key={index} name={studentData.name!} usn={studentData.usn} branch={studentData.branch!} year={studentData.year} tags={studentData.tags} />
    ))}
    </div>
   </main>
 );
};
export default HomePage;
import { auth, signOut } from "@/auth";
import { notFound } from "next/navigation";

const HomePage = async () => {
 const session = await auth();
 if (!session) return notFound();
 return (
   <main className="flex flex-col justify-center items-center gap-4 h-full">
     <h1>Hello {session.user!.name}</h1>

     <form
       action={async () => {
         "use server";
         await signOut();
       }}
     >
       <button type="submit">Log Out</button>
     </form>
   </main>
 );
};
export default HomePage;
import { auth } from "@/auth";
import { StudentCard } from "@/components/ui/StudentCard";
import db from "@/lib/db";
import { redirect } from "next/navigation";

import DynamicSearchField from "@/components/ui/Dynamicsearch";
import StudentFilter from "@/components/ui/Filter";
import NotFound from "@/components/NotFound/NotFound";

const HomePage = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) => {
  const session = await auth();
  if (!session) redirect("/login");
  
  const { name, usn, branch, year, tags } = await searchParams;
  const filter = name||usn||branch||year||tags;
  
  const filterConditions:any = {}; 

  if (name) {
    filterConditions.name = { contains: name, mode: "insensitive" };
  }

  if (usn) {
    filterConditions.usn = { contains: usn, mode: "insensitive" };
  }

  if (branch) {
    const cleanedBranch = branch.trim();
    filterConditions.branch = { equals: cleanedBranch};
  }

  if (year) {
    filterConditions.year = { equals: parseInt(year) }; 
  }

  
  if (tags) {
    const new_tags=tags.replaceAll("#","")
    if (new_tags.includes(',')) {
      const tagList = new_tags.split(',').map(tag => tag.trim()); 
      filterConditions.tags = { hasSome: tagList }; 
    } else {
      filterConditions.tags = { has: new_tags }; 
    }
  }

  const currentProfile=await db.profile.findUnique({
    where:{email:session?.user?.email??undefined}
  })
  if(!currentProfile){
    redirect("/profile")
  }
  const students = await db.profile.findMany({
    where: filterConditions,
  });
  if(!students.length) return <NotFound/>
  return (
    <main className="flex flex-col items-center gap-4 h-full text-black">
      <div className="w-full p-4 max-w-screen-xl mx-auto">
        <DynamicSearchField />
        <StudentFilter />
      </div>
      
      <div className="w-full justify-center grid grid-col-1 sm:grid-col-2 md:grid-cols-3 p-2 md:p-4 gap-5">
        {filter?null:
      <StudentCard
            key={0}
            photoURL={currentProfile.photoURL}
            name={currentProfile.name!}
            usn={currentProfile.usn}
            branch={currentProfile.branch!}
            year={currentProfile.year}
            tags={currentProfile.tags}
            email={currentProfile.email}
          />}
        {students.map((studentData, index) => {
          if(studentData.email===session.user?.email && !filter){
            return null;
          }
          return <StudentCard
            key={index+1}
            photoURL={studentData.photoURL}
            name={studentData.name!}
            usn={studentData.usn}
            branch={studentData.branch!}
            year={studentData.year}
            tags={studentData.tags}
            email={studentData.email}
          />
        })}
      </div>
    </main>
  );
};

export default HomePage;

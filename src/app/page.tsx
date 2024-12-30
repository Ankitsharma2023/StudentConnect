import { auth } from "@/auth";
import { StudentCard } from "@/components/ui/StudentCard";
import db from "@/lib/db";
import { notFound } from "next/navigation";

import DynamicSearchField from "@/components/ui/Dynamicsearch";
import StudentFilter from "@/components/ui/Filter";
import NotFound from "@/components/NotFound/NotFound";
import ScrollToTopButton from "@/components/ScrollToTop";

const HomePage = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) => {
  const session = await auth();
  if (!session) return notFound();

  
  const { name, usn, branch, year, tags } = await searchParams;

  
  const filterConditions:any = {}; 

  if (name) {
    filterConditions.name = { contains: name, mode: "insensitive" };
  }

  if (usn) {
    filterConditions.usn = { contains: usn, mode: "insensitive" };
  }

  if (branch) {
    filterConditions.branch = { contains: branch, mode: "insensitive" };
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
      <div className="min-h-screen w-full grid grid-col-1 sm:grid-col-2 md:grid-cols-3 items-center justify-center p-2 md:p-4 gap-5">
        {students.map((studentData, index) => (
          <StudentCard
            key={index}
            photoURL={studentData.photoURL}
            name={studentData.name!}
            usn={studentData.usn}
            branch={studentData.branch!}
            year={studentData.year}
            tags={studentData.tags}
            email={studentData.email}
          />
        ))}
      </div>
      <ScrollToTopButton/>
    </main>
  );
};

export default HomePage;

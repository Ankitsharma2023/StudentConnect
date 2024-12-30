import { FC } from 'react';
import { GetServerSidePropsContext } from 'next'; 
import  db  from '@/lib/db'; 
import StudentProfile from '@/components/ui/StudentProfile'; 
import { notFound } from 'next/navigation';








const StudentPage = async ({ searchParams }:{searchParams: Promise<{ [key: string]: string | undefined }>}) => {
  const { email } = await searchParams;
  if(!email) return notFound()
  const studentData = await db.profile.findUnique({
    where: { email: email || undefined },
  });
  if (!studentData) {
    return <div>Error loading student data.</div>;
  }

  return <StudentProfile student={studentData} />;
};

export default StudentPage;

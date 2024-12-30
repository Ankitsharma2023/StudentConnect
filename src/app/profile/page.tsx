
import { auth } from "@/auth";
import { FormProvider} from "@/components/StudentForm/FormContext";
import { FormSteps } from "@/components/StudentForm/FormSteps";
import { FormLayout } from "@/components/ui/FormLayout";
import db from "@/lib/db";
import { notFound, redirect, RedirectType } from "next/navigation";


const Test = async () => {
  const session = await auth();
  if (!session) return notFound();

  const existingUser = await db.profile.findUnique({
    where: { email: session.user?.email || undefined },
  });
  if (existingUser) {
    redirect("/", RedirectType.replace);
  }
  return (
    <FormProvider email={session.user?.email??""} photo={session.user?.image||null}>
      <FormLayout>
        <FormSteps />
      </FormLayout>
    </FormProvider>
  )
};

export default Test;

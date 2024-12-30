
import { auth } from "@/auth";
import { FormProvider} from "@/components/EditForm/FormContext";
import { FormSteps } from "@/components/EditForm/FormSteps";
import { EditFormLayout } from "@/components/ui/EditFormLayout";
import db from "@/lib/db";
import { notFound, redirect, RedirectType } from "next/navigation";


const Test = async () => {
  const session = await auth();
  if (!session) return notFound();

  const existingUser = await db.profile.findUnique({
    where: { email: session.user?.email || undefined },
  });
  if (!existingUser) {
    redirect("/profile", RedirectType.replace);
  }
  return (
    <FormProvider Sdata={existingUser} >
      <EditFormLayout>
        <FormSteps />
      </EditFormLayout>
    </FormProvider>
  )
};

export default Test;

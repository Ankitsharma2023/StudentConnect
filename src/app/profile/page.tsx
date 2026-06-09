import { auth } from "@/auth";
import { MultiStepForm } from "@/components/registration/multi-step-form";
import { FormProvider } from "@/components/StudentForm/FormContext";
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
    <FormProvider
      email={session.user?.email ?? ""}
      photo={session.user?.image || null}
    >
      <FormLayout>
        <MultiStepForm />
      </FormLayout>
    </FormProvider>
  );
};

export default Test;

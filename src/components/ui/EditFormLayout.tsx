import React from "react";

import { auth } from "@/auth";
import { notFound, redirect, RedirectType } from "next/navigation";
import db from "@/lib/db";

interface EditFormLayoutProps {
  children: React.ReactNode;
}

export const EditFormLayout: React.FC<EditFormLayoutProps> = async ({
  children,
}) => {
  const session = await auth();
  if (!session) return notFound();

  const existingUser = await db.profile.findUnique({
    where: { email: session.user?.email || undefined },
  });
  if (!existingUser) {
    redirect("/profile", RedirectType.replace);
  }
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Elements */}

      {/* Main Content */}
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1>{session.user?.name}</h1>
          <p className="text-sm text-gray-600">Edit your profile</p>
        </div>

        <div className="">{children}</div>
      </div>
    </div>
  );
};

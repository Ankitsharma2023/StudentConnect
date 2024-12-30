// components/ui/Navbar.tsx

import { auth, signOut } from "@/auth";
import Link from "next/link";
import { notFound } from "next/navigation";

const Navbar = async () => {
  const session = await auth();
  if (!session) return;

  return (
    <div className="w-full bg-gray-100 shadow-md">
      {/* Main Navbar container */}
      <div className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
        
        {/* Hello message for large screens */}
        <Link href={"/"}>
        <h1 className="text-xl font-semibold" >
          Hello, {session.user!.name}
        </h1></Link>
       

        <div className="flex items-center gap-4">
          {/* Log Out Button for small screens */}
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button
              type="submit"
              className="text-sm text-red-500 hover:underline"
            >
              Log Out
            </button>
          </form>
        </div>
      </div>

      {/* Filters Section: Display on larger screens */}
      
    </div>
  );
};

export default Navbar;

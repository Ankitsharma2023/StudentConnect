import { signIn } from "@/auth";
import GoogleButton from "@/components/GoogleButton";

const LoginPage = () => {
  return (
    <main className="flex w-full h-screen flex-col justify-center items-center gap-4 bg-black">
      <form
        className="flex flex-row justify-center items-center"
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <GoogleButton />
      </form>
    </main>
  );
};

export default LoginPage;

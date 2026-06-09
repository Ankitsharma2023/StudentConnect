import { signIn } from "@/auth";
import GoogleButton from "@/components/GoogleButton";
import CredentialsForm from "@/components/auth/CredentialsForm";

const LoginPage = () => {
  return (
    <main className="flex w-full h-screen flex-col justify-center items-center gap-6 bg-black px-4">
      <h1 className="text-2xl font-bold text-white">Welcome to Student Connect</h1>

      <CredentialsForm />

      <div className="flex w-full max-w-[320px] items-center gap-3">
        <span className="h-px flex-1 bg-[rgba(255,255,255,0.2)]" />
        <span className="text-xs uppercase text-gray-400">or</span>
        <span className="h-px flex-1 bg-[rgba(255,255,255,0.2)]" />
      </div>

      <form
        className="flex flex-row justify-center items-center w-full max-w-[320px]"
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

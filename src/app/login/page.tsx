
import { signIn } from "@/auth";
import GoogleButton from "@/components/GoogleButton";

const LoginPage = () => {
    return (
        <main className="flex w-full h-full flex-col justify-center items-center gap-4">

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
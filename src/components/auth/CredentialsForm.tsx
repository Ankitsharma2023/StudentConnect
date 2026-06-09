"use client";

import { useActionState, useState } from "react";

import {
  loginWithCredentials,
  registerWithCredentials,
  type AuthFormState,
} from "@/app/login/actions";

type Mode = "login" | "register";

const CredentialsForm = () => {
  const [mode, setMode] = useState<Mode>("login");
  const action = mode === "login" ? loginWithCredentials : registerWithCredentials;

  const [state, formAction, isPending] = useActionState<AuthFormState, FormData>(
    action,
    undefined
  );

  return (
    <div className="w-full max-w-[320px] flex flex-col gap-3">
      <form action={formAction} className="flex flex-col gap-3">
        {mode === "register" && (
          <input
            name="name"
            type="text"
            placeholder="Full name"
            required
            className="rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgb(40,40,60)] px-4 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgb(90,90,120)]"
          />
        )}
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          autoComplete="email"
          className="rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgb(40,40,60)] px-4 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgb(90,90,120)]"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          minLength={6}
          autoComplete={mode === "login" ? "current-password" : "new-password"}
          className="rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgb(40,40,60)] px-4 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgb(90,90,120)]"
        />

        {state?.error && (
          <p className="text-sm text-red-400">{state.error}</p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="rounded-lg bg-[rgb(50,50,80)] px-6 py-2 text-sm font-bold uppercase text-white transition-all duration-300 hover:bg-[rgb(90,90,120)] disabled:opacity-60"
        >
          {isPending
            ? "Please wait…"
            : mode === "login"
            ? "Sign in"
            : "Create account"}
        </button>
      </form>

      <button
        type="button"
        onClick={() => setMode(mode === "login" ? "register" : "login")}
        className="text-xs text-gray-400 hover:text-white transition-colors"
      >
        {mode === "login"
          ? "Don't have an account? Sign up"
          : "Already have an account? Sign in"}
      </button>
    </div>
  );
};

export default CredentialsForm;

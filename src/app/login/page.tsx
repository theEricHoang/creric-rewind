import { FormEvent, Suspense } from "react";
import LoginForm from "../components/ui/LoginForm";

export default function LoginPage() {

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');

  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-l from-rose-300 to-pink-400">
      <div className="p-5 border-white/40 border rounded-md bg-white/30 backdrop-blur-md shadow-lg">
        <h1 className="text-white text-5xl text-center">login</h1>

        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
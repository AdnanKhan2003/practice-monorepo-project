"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Login() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await authClient.signIn.email({
      email: userDetails.email,
      password: userDetails.password,
    });

    router.push('/dashboard');
    router.refresh();

    console.log(userDetails.email);
    console.log(userDetails.password);
  };

  return (
    <div className="flex justify-center align-center pt-10">
      <form onSubmit={handleSubmitLogin}>
        <div className="pt-2">
          <input
            className="border-2 border-r-2 px-2 py-1"
            type="email"
            name="email"
            onChange={(e) =>
              setUserDetails((prevDetails) => ({
                ...prevDetails,
                email: e.target.value,
              }))
            }
            placeholder="Enter Your Email"
          />
        </div>
        <div className="pt-2">
          <input
            className="border-2 border-r-2 px-2 py-1"
            type="password"
            name="password"
            onChange={(e) =>
              setUserDetails((prevDetails) => ({
                ...prevDetails,
                password: e.target.value,
              }))
            }
            placeholder="Enter Your Password"
          />
        </div>
        <button className="mt-10 border-2 border-r-2 border-amber-300 hover:bg-amber-400 hover:text-white px-4 py-2">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

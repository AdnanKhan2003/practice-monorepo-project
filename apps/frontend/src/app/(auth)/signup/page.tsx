"use client";
import { authClient } from "@/src/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Signup() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmitSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await authClient.signUp.email({
      name: userDetails.name,
      email: userDetails.email,
      password: userDetails.password,
    });

    router.push('/dashboard');
    router.refresh();

    console.log(userDetails.name);
    console.log(userDetails.email);
    console.log(userDetails.password);
  };

  return (
    <div className="flex justify-center align-center pt-10">
      <form onSubmit={handleSubmitSignup}>
        <div className="pt-2">
          <input
            className="border-2 border-r-2 px-2 py-1"
            type="text"
            name="name"
            onChange={(e) =>
              setUserDetails((prevDetails) => ({
                ...prevDetails,
                name: e.target.value,
              }))
            }
            placeholder="Enter Your Email"
          />
        </div>
        <div className="pt-2">
          <input
            className="border-2 border-r-2 px-2 py-1"
            type="email"
            name="email"
            onChange={(e) =>
              setUserDetails((prevData) => ({
                ...prevData,
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
              setUserDetails((prevData) => ({
                ...prevData,
                password: e.target.value,
              }))
            }
            placeholder="Enter Your Password"
          />
        </div>
        <button className="mt-10 border-2 border-r-2 border-amber-300 hover:bg-amber-400 hover:text-white px-4 py-2">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;

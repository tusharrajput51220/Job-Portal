"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BASEURL } from "@/utils/constant";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Loader2 } from "lucide-react";
import { setLoading, setUser } from "@/redux/authSlice";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading,user } = useSelector((store) => store.auth);
  const changeEvent = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(input);
    try {
      dispatch(setLoading(true));
      let data = await fetch(`${BASEURL}login`, {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      data = await data.json();
      toast.success(data.message);
      dispatch(setUser(data.user));
      router.push("/");
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setLoading(false));
    }
  };
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, []);

  return (
    <div className="flex items-center justify-center max-w-7xl mx-auto">
      <form
        onSubmit={submitHandler}
        action=""
        className="w-1/2 border border-gray-200 rounded-md p-4 my-10 "
      >
        <h1 className="font-bold text-xl mb-5">Login</h1>

        <div className="my-2">
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Enter email"
            value={input.email}
            name="email"
            onChange={changeEvent}
          />
        </div>
        <div className="my-2">
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Enter Password"
            value={input.password}
            name="password"
            onChange={changeEvent}
          />
        </div>

        <div className="flex items-center justify-between">
          <RadioGroup className="flex items-center gap-4 my-5">
            <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                value="student"
                checked={input.role == "student"}
                onChange={changeEvent}
                className="cursor-pointer"
              />
              <Label htmlFor="r1">Student</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                value="recruiter"
                checked={input.role == "recruiter"}
                onChange={changeEvent}
                className="cursor-pointer"
              />
              <Label htmlFor="r2">Recruiter</Label>
            </div>
          </RadioGroup>
        </div>
        {loading ? (
          <Button className="w-full my-4">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Wait...
          </Button>
        ) : (
          <Button type="submit" className="w-full my-4">
            Login
          </Button>
        )}
        <span className="text-sm">
          Dont have an account?{" "}
          <Link href="/signup" className="underline text-blue-500">
            Signup
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Login;

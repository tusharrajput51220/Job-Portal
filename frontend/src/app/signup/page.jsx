"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import React, { useState } from "react";
import { BASEURL } from "@/utils/constant";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function Signup() {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });
  const router=useRouter()
  const changeEvent = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changeFile = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(input)
    try {
      let data = await fetch(`${BASEURL}register`, {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
      });
      data=await data.json()
      toast.success(data.message)
      router.push("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center max-w-7xl mx-auto">
      <form
        onSubmit={submitHandler}
        action=""
        className="w-1/2 border border-gray-200 rounded-md p-4 my-10 "
      >
        <h1 className="font-bold text-xl mb-5">Sign Up</h1>
        <div className="my-2">
          <Label>Full Name</Label>
          <Input
            type="text"
            value={input.fullName}
            name="fullName"
            onChange={changeEvent}
            placeholder="Enter name"
          />
        </div>
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
          <Label>Phone</Label>
          <Input
            type="text"
            placeholder="Enter Phone number"
            value={input.phoneNumber}
            name="phoneNumber"
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
          <div className="flex items-center gap-2">
            <Label>Profile</Label>
            <Input
              accept="image/*"
              type="file"
              onChange={changeFile}
              className="cursor-pointer"
            />
          </div>
        </div>
        <Button type="submit" className="w-full my-4">
          Signup
        </Button>
        <span className="text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline text-blue-500">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Signup;

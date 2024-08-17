"use client"
import AppliedJobTable from "@/components/AppliedJobTable";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import UpdateProfileDialog from "@/components/UpdateProfileDialog";
import { Contact, Mail, Pen } from "lucide-react";
import React, { useState } from "react";

const page = () => {
  const [open, setOpen]=useState(false)

  const skills = ["Html", "Css", "Javascript", "RaectJs", "NextJs"];
  const isResume=true

  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://th.bing.com/th/id/OIP.GN1-R3cCXf-sQcQF6Zkt8AHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Lorem Lorem Lorem v Lorem v Lorem Lorem Lorem Lorem Lorem Lorem
                Lorem v v v Lorem Lorem Lorem Lorem
              </p>
            </div>
          </div>
          <Button className="text-right" variant="outline" onClick={() => setOpen(true)}>
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>tushar@demo.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>8976578476</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {skills.length > 0 ? (
              skills.map((item, index) => <Badge key={index}>{item}</Badge>)
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href=""
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              RESUME
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl">
          <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
          <AppliedJobTable />
        </div>
        <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default page;

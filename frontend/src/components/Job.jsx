"use client"
import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useRouter } from "next/navigation";

function Job() {
  const jobId="msmdskdksldldl"
  const router=useRouter()
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button>
          <Avatar>
            <AvatarImage src="https://th.bing.com/th/id/OIP.GN1-R3cCXf-sQcQF6Zkt8AHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt eiusmod tempor incididunt eiusmod tempor
          incididunt
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={'text-blue-700 font-bold'} variant="ghost">12 Positions</Badge>
        <Badge className={'text-[#F83002] font-bold'} variant="ghost">Part Time</Badge>
        <Badge className={'text-[#7209b7] font-bold'} variant="ghost">24 LPA</Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button variant="outline" onClick={() => router.push(`/description/${jobId}`)}>Details</Button>
        <Button className="bg-[#7209b7]">Save For Later</Button>
      </div>
    </div>
  );
}

export default Job;

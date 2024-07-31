import Link from "next/link";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";

function Navbar() {
  const user = false;
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">Jobs</Link>
            </li>
            <li>
              <Link href="">Browse</Link>
            </li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link href="/login"><Button variant="outline">Login</Button></Link>
              <Link href="/signup"><Button>Signup</Button></Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="http://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  {/* <AvatarFallback>CN</AvatarFallback> */}
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex my-2 gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="http://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Tushar Rajput</h4>
                    <p className="text-sm text-muted-foreground">
                      lorem start ru dev jalak
                    </p>
                  </div>
                </div>
                <div className="flex w-fit items-center gap-2 cursor-pointer text-gray-600">
                  <User2 />
                  <Button variant="link">View profile</Button>
                </div>
                <div className="flex w-fit items-center gap-2 cursor-pointer text-gray-600">
                  <LogOut />
                  <Button variant="link">Logout</Button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

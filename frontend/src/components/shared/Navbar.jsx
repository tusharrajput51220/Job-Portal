import Link from "next/link";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { BASEURL } from "@/utils/constant";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";

function Navbar() {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const router=useRouter();
  // console.log(user)

  const logoutHandler = async () => {
    try {
      const res = await fetch(`${BASEURL}logout`, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data)
      if (data.success) {
        dispatch(setUser(null));
        router.push("/");
        toast.success(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.data.message);
    }
  };
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
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/jobs">Jobs</Link>
            </li>
            <li>
              <Link href="/browse">Browse</Link>
            </li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-[#7209b7]">Signup</Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="@shadcn"
                  />
                  {/* <AvatarFallback>CN</AvatarFallback> */}
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex my-2 gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{user?.fullName}</h4>
                    <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>
                <div className="flex w-fit items-center gap-2 cursor-pointer text-gray-600">
                  <User2 />
                  <Button variant="link">
                    <Link href="/profile">View profile</Link>
                  </Button>
                </div>
                <div className="flex w-fit items-center gap-2 cursor-pointer text-gray-600">
                  <LogOut />
                  <Button variant="link" onClick={logoutHandler}>Logout</Button>
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

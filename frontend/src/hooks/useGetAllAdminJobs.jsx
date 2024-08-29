import { setAllAdminJobs } from "@/redux/jobSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BASEURL } from "@/utils/constant";

const UseGetAllAdminJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllAdminJobs = async () => {
      try {
        let res = await fetch(`${BASEURL}adminJob`, {
          credentials: "include",
        });
        res = await res.json();
        // console.log(res)
        if (res.success) {
          dispatch(setAllAdminJobs(res.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllAdminJobs();
  }, []);
};

export default UseGetAllAdminJobs;

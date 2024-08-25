"use client";
import React, { useEffect } from "react";
import { BASEURL } from "@/utils/constant";
import { useDispatch } from "react-redux";
import { setAllJobs } from "@/redux/jobSlice";

const UseGetAllJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        let res = await fetch(`${BASEURL}allJobs`, { credentials: "include" });
        res = await res.json();
        console.log(res);
        dispatch(setAllJobs(res.jobs));
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllJobs();
  }, [dispatch]); // Added 'dispatch' to the dependency array
};

export default UseGetAllJobs;

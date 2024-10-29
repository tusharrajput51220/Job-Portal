"use client";
import React, { useEffect } from "react";
import { BASEURL } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setAllJobs } from "@/redux/jobSlice";

const UseGetAllJobs = () => {
  const dispatch = useDispatch();
  const { searchedQuery } = useSelector((store) => store.job);
  console.log(searchedQuery);

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        let res = await fetch(`${BASEURL}allJobs?keyword=${searchedQuery}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        });

        res = await res.json();
        console.log("uu", res);

        if (res.success) {
          dispatch(setAllJobs(res.jobs)); // Dispatch only if the response is successful
        } else {
          console.error("Failed to fetch jobs:", res.message);
        }
      } catch (err) {
        console.log("Error fetching jobs:", err);
      }
    };

    fetchAllJobs();
  }, [dispatch, searchedQuery]); // Added 'searchedQuery' to the dependency array
};

export default UseGetAllJobs;

"use client"

import FilterCard from "@/components/FilterCard";
import Job from "@/components/Job";
import React from "react";
import { useSelector } from "react-redux";

function page() {
  const { allJobs } = useSelector((store) => store.job);
  // console.log(allJobs)
  return (
    <div>
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-20%">
            <FilterCard />
          </div>
          {allJobs?.length == 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {allJobs?.map((item) => (
                  <div key={item?._id}><Job job={item} /></div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default page;

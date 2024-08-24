import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";

function LatestJobs() {
  const { allJobs } = useSelector((store) => store.job);
  // console.log(allJobs[0]?._id)
  return (
    <div className="max-w-7xl mx-auto my-20 ">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top </span>Job Openings
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {allJobs?.length== 0 ? (
          <span>No Jobs Available</span>
        ) : (
          allJobs?.map((item) => <LatestJobCards key={item?._id} job={item} />)
        )}
      </div>
    </div>
  );
}

export default LatestJobs;

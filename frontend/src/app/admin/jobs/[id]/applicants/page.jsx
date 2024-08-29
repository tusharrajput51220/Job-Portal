"use client";

import { setAllApplicants } from "@/redux/applicationSlice";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASEURL } from "@/utils/constant";
import ApplicantsTable from "@/components/admin/ApplicantsTable";

const Applicants = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { applicants } = useSelector((store) => store.application);

  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        let res = await fetch(`${BASEURL}${params.id}/applicants`, {
          credentials: "include",
        });
        res = await res.json();
        // console.log(res);
        dispatch(setAllApplicants(res.job));
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllApplicants();
  }, [dispatch, params.id]);

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-xl my-5">
          Applicants {applicants?.applications?.length || 0}
        </h1>
        <ApplicantsTable />
      </div>
    </div>
  );
};

export default Applicants;

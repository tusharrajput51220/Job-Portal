"use client"

import CompaniesTable from "@/components/admin/CompaniesTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Companies = () => {
  // useGetAllCompanies();
  const [input, setInput] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  // useEffect(()=>{
  //     dispatch(setSearchCompanyByText(input));
  // },[input]);
  return (
    <div>
      <div className="max-w-6xl mx-auto my-10">
        <div className="flex items-center justify-between my-5">
          <Input
            className="w-fit"
            placeholder="Filter by name"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={() => router.push("/admin/companies/create")}>
            New Company
          </Button>
        </div>
        <CompaniesTable />
      </div>
    </div>
  );
};

export default Companies;

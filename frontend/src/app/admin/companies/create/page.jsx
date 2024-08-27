"use client";

import React, { useState } from "react";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
// import { setSingleCompany } from "@/redux/companySlice";
import { Router } from "lucide-react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BASEURL } from "@/utils/constant";
import { setSingleCompany } from "@/redux/companySlice";

const CompanyCreate = () => {
  const router = useRouter();
  const [companyName, setCompanyName] = useState();
  const dispatch = useDispatch();
  const registerNewCompany = async () => {
    console.log(companyName);
    try {
      let response = await fetch(`${BASEURL}registerCompany`, {
        method: "POST",
        body: JSON.stringify({ companyName: companyName }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        // Handle non-200 status codes
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to register company");
      }

      let data = await response.json();
      toast.success(data.message);
      dispatch(setSingleCompany(data.company));
      const companyId = data?.company?._id;
      router.push(`/admin/companies/${companyId}`);
    } catch (err) {
      console.error("Error registering company:", err.message);
      toast.error("Failed to register company. Please try again.");
    }
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <div className="my-10">
          <h1 className="font-bold text-2xl">Your Company Name</h1>
          <p className="text-gray-500">
            What would you like to give your company name? you can change this
            later.
          </p>
        </div>

        <Label>Company Name</Label>
        <Input
          type="text"
          className="my-2"
          placeholder="JobHunt, Microsoft etc."
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <div className="flex items-center gap-2 my-10">
          <Button
            variant="outline"
            onClick={() => router.push("/admin/companies")}
          >
            Cancel
          </Button>
          <Button onClick={registerNewCompany}>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCreate;

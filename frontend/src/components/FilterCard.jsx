import React from "react";
import { RadioGroup } from "./ui/radio-group";

function FilterCard() {
  const filterData = [
    {
      filterType: "Location",
      array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
    },
    {
      filterType: "Industry",
      array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
    },
    {
      filterType: "Salary",
      array: ["0-40k", "42-1lakh", "1lakh-5lakh"],
    },
  ];

  return (
    <div>
      <h1>filterCard</h1>
      <hr className="mt-3"/>
      <RadioGroup>
        {
            filterData?.map((data,index) => (
                <div>
                    <h1>{data.filterType}</h1>
                    {
                        data?.array.map((item,index) => (
                            <div></div>
                        ))
                    }
                </div>
            ))
        }
      </RadioGroup>
    </div>
  );
}

export default FilterCard;

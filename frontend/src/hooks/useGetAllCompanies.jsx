import { setCompanies } from "@/redux/companySlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BASEURL } from "@/utils/constant";

const UseGetAllCompanies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const fetchCompanies = async () => {
      try {
        let res = await fetch(`${BASEURL}getAllCompanies`, {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        res = await res.json();
        // console.log(res.companies);
        dispatch(setCompanies(res.companies));
      } catch (err) {
        console.log(err);
      }
    };
    fetchCompanies();
  }, []);
};

export default UseGetAllCompanies;

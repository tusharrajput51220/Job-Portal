import { setCompanies } from "@/redux/companySlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BASEURL } from "@/utils/constant";

const UseGetAllCompanies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        let res = await fetch(`${BASEURL}getAllCompanies`, {
          credentials: "include",
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

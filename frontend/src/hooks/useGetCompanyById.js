import { setSingleCompany } from "@/redux/companySlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BASEURL } from "@/utils/constant";

const UseGetCompanyById = (companyId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchSingleCompany = async () => {
      try {
        let res = await fetch(`${BASEURL}companyByCompanyId/${companyId}`, {
          credentials: "include",
        });
        res = await res.json();
        console.log(res);
        dispatch(setSingleCompany(res.company));
      } catch (err) {
        console.log(err);
      }
    };
    fetchSingleCompany();
  }, [companyId, dispatch]);
};

export default UseGetCompanyById;

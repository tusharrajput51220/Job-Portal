import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { BASEURL } from "@/utils/constant";
import { setAllAppliedJobs } from "@/redux/jobSlice";

const UseGetAppliedJobs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAppliedJobs = async () => {
            try {
                const token = localStorage.getItem("accessToken");
                let res = await fetch(`${BASEURL}getJobs`, {
                    credentials: "include", headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                res = await res.json()
                console.log(res);
                if (res.success) {
                    dispatch(setAllAppliedJobs(res.application));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAppliedJobs();
    }, [])
};
export default UseGetAppliedJobs;
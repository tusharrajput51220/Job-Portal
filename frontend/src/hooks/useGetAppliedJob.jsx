import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { BASEURL } from "@/utils/constant";
import { setAllAppliedJobs } from "@/redux/jobSlice";

const UseGetAppliedJobs = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchAppliedJobs = async () => {
            try {
                let res = await fetch(`${BASEURL}getJobs`, {credentials:"include"});
                res=await res.json()
                console.log(res);
                if(res.success){
                    dispatch(setAllAppliedJobs(res.application));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAppliedJobs();
    },[])
};
export default UseGetAppliedJobs;
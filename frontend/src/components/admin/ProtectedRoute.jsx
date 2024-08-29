import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.auth);

  const router = useRouter();

  useEffect(() => {
    if (user === null || user.role !== "recruiter") {
      router.push("/");
    }
  }, []);

  return <>{children}</>;
};
export default ProtectedRoute;

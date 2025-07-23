import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Logout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    navigate("/", { replace: true });
  }, [user]);

  const logout = async () => {
    await api("DELETE", '/login')
    setUser();
  };

  logout();

  // navigate("/", { replace: true });
  // return <></>;
};

export default Logout;

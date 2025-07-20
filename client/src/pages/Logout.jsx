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
    await fetch("http://localhost:3000/api/v1/login", {
      method: "DELETE",
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => r.json());
    setUser();
  };

  logout();

  // navigate("/", { replace: true });
  // return <></>;
};

export default Logout;

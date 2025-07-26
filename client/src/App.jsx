import { createContext, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { api } from "./helpers/api";

export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get("redirect");
    if (redirectPath && location.pathname === "/") {
      // Remove query param and navigate to correct path
      navigate(redirectPath, { replace: true });
    }
  }, [navigate, location]);

  useEffect(() => {
    const getUser = async () => {
      const response = await api("get", "/users");
      if (response.error != null) return;
      setUser(response.user);
    };

    getUser();
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <ScrollToTop />
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
    </UserContext.Provider>
  );
};

export default App;

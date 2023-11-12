import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Header } from "../components/header/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../features/authSlice";

export const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      dispatch(getUser());
    }
  }, [dispatch]);

  return (
    <div className="min-h-[100dvh]">
      <Header />
      <main className="conatiner">
        <Outlet />
      </main>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

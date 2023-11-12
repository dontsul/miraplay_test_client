import { NavLink } from "react-router-dom";
import { Button } from "../button/Button";
import { IoLogOutOutline } from "react-icons/io5";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../features/authSlice";
import { Burger } from "../burger/Burger";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const { token, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const handleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);
  const handleLogout = useCallback(() => {
    window.localStorage.removeItem("token");
    dispatch(logout());
    navigate("/login");
  }, [dispatch, navigate]);

  return (
    <header className="md:flex md:items-center md:justify-between bg-lightGray py-5 px-6 shadow-lg shadow-lightGreen hover:shadow-xl hover:shadow-lightGreen transition duration-200">
      <div className="flex items-center justify-between">
        <NavLink
          className="text-3xl text-mainGreen mainGreen hover:text-lightGreen font-bold transition duration-200"
          to={"/"}
        >
          Games App
        </NavLink>

        <Burger handleOpen={handleOpen} isOpen={isOpen} />
      </div>
      {!loading && (
        <ul
          className={`flex flex-col items-center md:flex md:flex-row mt-3 md:mt-0 gap-4 md:gap-6 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <NavLink
              className={` hover:text-lightGreen transition duration-200  ${
                pathname === "/" ? "text-mainGreen" : "text-slateLight"
              }  line`}
              to={"/"}
            >
              Home
            </NavLink>
          </li>

          {!token ? (
            <>
              <li>
                <NavLink
                  className={` hover:text-lightGreen transition duration-200  ${
                    pathname === "/login" ? "text-mainGreen" : "text-slateLight"
                  } line`}
                  to={"/login"}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={` hover:text-lightGreen transition duration-200  ${
                    pathname === "/registration" ? "text-mainGreen" : "text-slateLight"
                  } line`}
                  to={"/registration"}
                >
                  Registration
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <Button
                onClick={handleLogout}
                cn="flex gap-2 items-center justify-center text-base py-[0.5rem]"
              >
                <IoLogOutOutline className="text-[1rem]" /> <span>Logout</span>
              </Button>
            </li>
          )}
        </ul>
      )}
    </header>
  );
};

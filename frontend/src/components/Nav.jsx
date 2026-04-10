import { useState, useRef, useEffect } from "react";
import { Link, Navigate, Route, useNavigate } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import toast from "react-hot-toast";
import { logoutUser } from "../api/api";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdSpaceDashboard, MdOutlineMenu, MdClose } from "react-icons/md";
import Logo from "./Logo";

// import { logoutUser } from "../api/api";

const Nav = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);
  // logged user
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [dropdown, setDropdown] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await toast.promise(logoutUser(), {
        loading: "Logging out...",
        success: "Logged out successfully 👋",
        error: "Logout failed ❌",
      });

      localStorage.removeItem("user");
      setDropdown(false);
      navigate("/login");
    } catch (err) {
      console.error(err);
      setDropdown(false);
      await toast.promise(logoutUser(), {
        loading: "Logging out...",
        error: "Logout failed ❌",
      });
    }
  };

  const toggle = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <>
      {/* <nav className="flex h-16 items-center justify-between px-8 bg-primary"> */}
      <nav
        className="hidden md:flex h-16 items-center justify-between px-12 py-10
bg-blue-950/10 backdrop-blur-md border-b border-white/20 
shadow-lg fixed top-0 left-0 w-full z-50"
      >
        <Link to="/" className="flex flex-1">
          <Logo />
        </Link>

        <div className="flex items-center gap-8 cursor-pointer">
          <a href="#services" className="text-white">
            Services
          </a>
          <a href="#teams" className="text-white">
            Team
          </a>
          <a href="#about" className="text-white">
            About
          </a>
          <a href="#contact" className="text-white">
            Contact
          </a>

          {!user && (
            <Link
              to="/login"
              className="text-white bg-primary px-4 py-1.5 rounded-xl"
            >
              Login
            </Link>
          )}

          {user && (
            <div className="flex items-center gap-2" onClick={toggle}>
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
                className="w-8 h-8 rounded-full cursor-pointer"
              />
              <span className="text-primary font-bold">
                {user.firstname}&nbsp;{user.surname}
              </span>
            </div>
          )}
        </div>
      </nav>

      {user && dropdown && (
        <div
          ref={dropdownRef}
          className="fixed right-4 top-16 z-50 bg-white w-[200px] rounded-2xl shadow-lg"
        >
          <div className="border-4 h-max fixed bg-white w-[300px] absolute right-0 rounded-2xl">
            <div className="flex cursor-pointer flex-col items-center justify-center py-1 mb-1">
              <Link
                to="/user-dashboard"
                onClick={() => setDropdown(false)}
                className="mt-2 flex items-center gap-1 py-2 hover:bg-gray-200 hover:px-8 hover:rounded-2xl transition-all duration-150 ease-in"
              >
                <MdSpaceDashboard className="size-5" />
                <span className="">Dashboard</span>
              </Link>
              <div className="flex items-center gap-1 py-2 hover:bg-gray-200 hover:px-8 hover:rounded-2xl transition-all duration-150 ease-in">
                <FaUserEdit className="size-5" />
                <span className="">Profile</span>
              </div>
              <div className="flex items-center gap-1 py-2 hover:bg-gray-200 hover:px-8 hover:rounded-2xl transition-all duration-150 ease-in">
                <IoSettingsSharp className="size-5" />
                <span className="">Settings</span>
              </div>
              <div
                onClick={handleLogout}
                className="flex items-center gap-1 py-2 hover:bg-gray-200 hover:px-8 hover:rounded-2xl transition-all duration-150 ease-in"
              >
                <LuLogOut className="size-5" />
                <span className="">Logout</span>
              </div>
            </div>

            <div className="px-4 flex items-center gap-2 mb-4">
              <IoMdInformationCircleOutline className="w-6 h-6" />
              <span className="text-[16px]">
                User currently on{" "}
                <strong className="text-primary font-semibold">Demo</strong>
                &nbsp;Plan
              </span>
            </div>
          </div>
        </div>
      )}

      {/* mobile nav */}
      <nav className="flex relative md:hidden flex-col">
        <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-blue-950/10 flex justify-between items-center p-4 border-b border-gray-800">
          <Link to="/">
            <Logo />
          </Link>

          <div>
            <MdOutlineMenu
              className="w-8 h-8 font-extrabold text-white cursor-pointer"
              onClick={() => setMobileNav((prev) => !prev)}
            />
          </div>
        </div>
        {mobileNav && (
          <div className="fixed inset-0 flex flex-col bg-black z-50">
            <div className="flex justify-end p-4">
              <MdClose
                className="w-7 h-7 text-white cursor-pointer"
                onClick={() => setMobileNav((prev) => !prev)}
              />
            </div>

            <div className="flex flex-col items-center justify-center flex-1 gap-8 px-4 text-center">
              <Link
                to="/register"
                onClick={() => setMobileNav(false)}
                className="text-white text-xl sm:text-2xl font-semibold"
              >
                Register
              </Link>

              <Link
                to="/login"
                onClick={() => setMobileNav(false)}
                className="text-white text-xl sm:text-2xl font-semibold"
              >
                Login
              </Link>

              <a
                href="#services"
                onClick={() => setMobileNav(false)}
                className="text-white text-xl sm:text-2xl font-semibold"
              >
                Services
              </a>

              <a
                href="#teams"
                onClick={() => setMobileNav(false)}
                className="text-white text-xl sm:text-2xl font-semibold"
              >
                Teams
              </a>

              <a
                href="#about"
                onClick={() => setMobileNav(false)}
                className="text-white text-xl sm:text-2xl font-semibold"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={() => setMobileNav(false)}
                className="text-white text-xl sm:text-2xl font-semibold"
              >
                Contact
              </a>

              {user && (
                <>
                  <Link
                    onClick={() => setMobileNav(false)}
                    to="/user-dashboard"
                    className="text-white text-xl sm:text-2xl font-semibold"
                  >
                    Dashboard
                  </Link>
                  <span
                    className="text-white text-xl sm:text-2xl font-semibold"
                    onClick={handleLogout}
                  >
                    Logout
                  </span>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;

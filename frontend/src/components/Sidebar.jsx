import { Navigate } from "react-router-dom";
import { FaIcons } from "react-icons/fa6";

const Sidebar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <section className="text-white hidden md:flex">
        <div
          className="flex flex-col w-[100px] md:w-[250px] border-r border-gray-700 items-center gap-4 cursor-pointer p-4
      h-screen overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
          <div className="mt-20 flex items-center gap-2 py-2 text-white hover:px-12 hover:bg-gray-800 rounded-2xl transition-all ease-in duration-150">
            <FaIcons className="h-4 w-4" />
            <span className="text-[16px] hidden md:block">Link 1</span>
          </div>

          <div className="flex items-center gap-2 py-2 text-white hover:px-12 hover:bg-gray-800 rounded-2xl transition-all ease-in duration-150">
            <FaIcons className="h-4 w-4" />
            <span className="text-[16px] hidden md:block">Link 1</span>
          </div>

          <div className="flex items-center gap-2 py-2 text-white hover:px-12 hover:bg-gray-800 rounded-2xl transition-all ease-in duration-150">
            <FaIcons className="h-4 w-4" />
            <span className="text-[16px] hidden md:block">Link 1</span>
          </div>

          <div className="flex items-center gap-2 py-2 text-white hover:px-12 hover:bg-gray-800 rounded-2xl transition-all ease-in duration-150">
            <FaIcons className="h-4 w-4" />
            <span className="text-[16px] hidden md:block">Link 1</span>
          </div>
        </div>

        <div className="flex-2"></div>
      </section>

      <section className="flex fixed top-1/2 left-0 -translate-x-0 -translate-y-1/2 md:hidden border items-center px-3 py-6 justify-center border rounded-2xl border-blue-950 h-max w-[100px]">
        <div className="flex flex-col gap-6">
          <span>
            <FaIcons className="h-6 w-6 text-white" />
          </span>
          <span>
            <FaIcons className="h-6 w-6 text-white" />
          </span>
          <span>
            <FaIcons className="h-6 w-6 text-white" />
          </span>
          <span>
            <FaIcons className="h-6 w-6 text-white" />
          </span>
          <span>
            <FaIcons className="h-6 w-6 text-white" />
          </span>
          <span>
            <FaIcons className="h-6 w-6 text-white" />
          </span>
        </div>
      </section>
    </>
  );
};

export default Sidebar;

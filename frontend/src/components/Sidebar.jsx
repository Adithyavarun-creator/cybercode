import { Navigate } from "react-router-dom";
import { FaIcons } from "react-icons/fa6";

const Sidebar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="text-white mt-18 flex">
      {/* sidebar */}
      <div
        className="flex flex-col w-[250px] border-r border-gray-700 items-center gap-4 cursor-pointer p-4
      h-screen overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        <div className="flex items-center gap-2 py-2 text-white hover:px-12 hover:bg-gray-800 rounded-2xl transition-all ease-in duration-150">
          <FaIcons className="h-4 w-4" />
          <span className="text-[16px]">Link 1</span>
        </div>

        <div className="flex items-center gap-2 py-2 text-white hover:px-12 hover:bg-gray-800 rounded-2xl transition-all ease-in duration-150">
          <FaIcons className="h-4 w-4" />
          <span className="text-[16px]">Link 1</span>
        </div>

        <div className="flex items-center gap-2 py-2 text-white hover:px-12 hover:bg-gray-800 rounded-2xl transition-all ease-in duration-150">
          <FaIcons className="h-4 w-4" />
          <span className="text-[16px]">Link 1</span>
        </div>

        <div className="flex items-center gap-2 py-2 text-white hover:px-12 hover:bg-gray-800 rounded-2xl transition-all ease-in duration-150">
          <FaIcons className="h-4 w-4" />
          <span className="text-[16px]">Link 1</span>
        </div>
      </div>

      <div className="flex-2"></div>
    </section>
  );
};

export default Sidebar;

import { Navigate } from "react-router-dom";
import { FaIcons } from "react-icons/fa6";
import Sidebar from "../components/Sidebar";
import DashboardContent from "../components/DashboardContent";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="flex flex-row">
      <div className="flex w-[300px]">
        <Sidebar />
      </div>
      <div>
        <DashboardContent />
      </div>
    </section>
  );
};

export default Dashboard;

import { Button } from "./Button";
import { GrShieldSecurity } from "react-icons/gr";

const Team = () => {
  return (
    <section id="teams" className="mt-10 px-12 flex flex-col gap-6 mb-20">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-3xl text-white font-semibold">Expert Team</h2>
        <span className="text-xl text-gray-500 text-center md:text-start">
          Industry veterans with decades of combined cybersecurity experience
        </span>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col items-center justify-center cursor-pointer gap-2 border border-gray-800 text-white px-6 py-4 rounded-2xl hover:border-blue-900 transition-all duration-200 ease-in-out">
          <span className="w-12 h-12 mb-3 md:mb-8 flex items-center justify-center text-white font-semibold p-4 bg-primary rounded-3xl">
            DSM
          </span>
          <span className="text-2xl font-semibold">Dr. Sarah Mitchell</span>
          <span className="text-xl text-primary">Chief Security Officer</span>
          <span className="text-gray-500">
            Enterprise Security Architecture
          </span>
        </div>

        <div className="flex flex-col items-center justify-center cursor-pointer gap-2 border border-gray-800 text-white px-6 py-4 rounded-2xl hover:border-blue-900 transition-all duration-200 ease-in-out">
          <span className="w-12 h-12 mb-3 md:mb-8 flex items-center justify-center text-white font-semibold p-4 bg-primary rounded-3xl">
            JC
          </span>
          <span className="text-2xl font-semibold">James Chen</span>
          <span className="text-xl text-primary">Lead Penetration Tester</span>
          <span className="text-gray-500">Ethical Hacking & Assessments </span>
        </div>

        <div className="flex flex-col items-center justify-center cursor-pointer gap-2 border border-gray-800 text-white px-6 py-4 rounded-2xl hover:border-blue-900 transition-all duration-200 ease-in-out">
          <span className="w-12 h-12 mb-3 md:mb-8 flex items-center justify-center text-white font-semibold p-4 bg-primary rounded-3xl">
            ER
          </span>
          <span className="text-2xl font-semibold">Emma Rodriguez</span>
          <span className="text-xl text-primary">Threat Intelligence Lead</span>
          <span className="text-gray-500">Cyber Threat Analysis</span>
        </div>

        <div className="flex flex-col items-center justify-center cursor-pointer gap-2 border border-gray-800 text-white px-6 py-4 rounded-2xl hover:border-blue-900 transition-all duration-200 ease-in-out">
          <span className="w-12 h-12 mb-3 md:mb-8 flex items-center justify-center text-white font-semibold p-4 bg-primary rounded-3xl">
            MT
          </span>
          <span className="text-2xl font-semibold">Michael Thompson</span>
          <span className="text-xl text-primary">
            Incident Response Manager
          </span>
          <span className="text-gray-500">Crisis Management & Recovery</span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-6 px-6 md:px-10">
        <div className="mt-10 md:mt-20 flex flex-col gap-6 p-6 rounded-2xl border border-blue-950 w-full md:w-[80%] h-max md:h-[360px]">
          <div className="mt-6 md:mt-14">
            <h2 className="text-white text-center text-3xl font-bold">
              Ready to Secure Your Enterprise?
            </h2>
          </div>
          <div className="w-[300px] md:w-[600px] mx-auto">
            <span className="text-gray-500 text-xl">
              Let our team of security experts protect your organization from
              evolving cyber threats. Get a free security assessment today.
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
            <Button title="Start Security Assessment" />
            <button
              className="bg-black text-white text-sm px-8 py-3 font-semibold rounded-2xl cursor-pointer border border-gray-500
            hover:bg-white hover:text-black transition-all duration-200 ease-in"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

import { SiTestcafe } from "react-icons/si";
import { IoMdEye } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";
import { MdModelTraining } from "react-icons/md";

const Services = () => {
  return (
    <section id="services" className="mt-4 px-12 flex flex-col gap-6">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-3xl text-white font-semibold">Our Services</h2>
        <span className="text-xl text-gray-500">
          Comprehensive security solutions tailored to protect your enterprise
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-10">
        <div className="flex flex-col cursor-pointer gap-4 border border-gray-800 text-white px-6 py-4 rounded-2xl hover:border-blue-900 transition-all duration-200 ease-in-out">
          <SiTestcafe className="w-10 h-10 text-primary p-2 bg-blue-950 rounded-3xl" />
          <span className="text-3xl font-semibold">Penetration Testing</span>
          <article className="text-gray-500">
            Comprehensive security assessments to identify vulnerabilities
            before attackers do.
          </article>
        </div>

        <div className="flex flex-col cursor-pointer gap-4 border border-gray-800 text-white px-6 py-4 rounded-2xl hover:border-blue-900 transition-all duration-200 ease-in-out">
          <IoMdEye className="w-10 h-10 text-primary p-2 bg-blue-950 rounded-3xl" />
          <span className="text-3xl font-semibold">Threat Monitoring</span>
          <article className="text-gray-500">
            24/7 real-time monitoring and detection of suspicious activities
            across your systems.
          </article>
        </div>

        <div className="flex flex-col cursor-pointer gap-4 border border-gray-800 text-white px-6 py-4 rounded-2xl hover:border-blue-900 transition-all duration-200 ease-in-out">
          <FaLock className="w-10 h-10 text-primary p-2 bg-blue-950 rounded-3xl" />
          <span className="text-3xl font-semibold">Incident Response</span>
          <article className="text-gray-500">
            Rapid response team available around the clock to handle security
            breaches.
          </article>
        </div>

        <div className="flex flex-col cursor-pointer gap-4 border border-gray-800 text-white px-6 py-4 rounded-2xl hover:border-blue-900 transition-all duration-200 ease-in-out">
          <MdOutlineSecurity className="w-10 h-10 text-primary p-2 bg-blue-950 rounded-3xl" />
          <span className="text-3xl font-semibold">Security Audits</span>
          <article className="text-gray-500">
            In-depth analysis of your security infrastructure and compliance
            with regulations.
          </article>
        </div>
        <div className="flex flex-col cursor-pointer gap-4 border border-gray-800 text-white px-6 py-4 rounded-2xl hover:border-blue-900 transition-all duration-200 ease-in-out">
          <RiErrorWarningLine className="w-10 h-10 text-primary p-2 bg-blue-950 rounded-3xl" />
          <span className="text-3xl font-semibold">
            Vulnerability Assessment
          </span>
          <article className="text-gray-500">
            Systematic identification and documentation of security weaknesses
            in your network.
          </article>
        </div>

        <div className="flex flex-col cursor-pointer gap-4 border border-gray-800 text-white px-6 py-4 rounded-2xl hover:border-blue-900 transition-all duration-200 ease-in-out">
          <MdModelTraining className="w-10 h-10 text-primary p-2 bg-blue-950 rounded-3xl" />
          <span className="text-3xl font-semibold">Security Training</span>
          <article className="text-gray-500">
            Employee security awareness programs to strengthen your human
            firewall.
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;

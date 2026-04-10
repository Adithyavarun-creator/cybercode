import HeaderImage from "../assets/header.jpg";
import { Button } from "./Button";
import { FaCalendarCheck } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

const Header = () => {
  return (
    <header className="mt-0 md:mt-16 flex flex-col relative">
      <div>
        <img
          src={HeaderImage}
          className="md:w-full h-[450px] md:h-[550px] opacity-40"
          alt="header"
        />
      </div>
      <div className="absolute top-20 md:top-30 px-8 md:px-10 flex flex-col gap-6">
        <div className="cursor-pointer flex flex-row items-center gap-2 text-primary border border-text-primary px-4 py-1.5 bg-blue-100 w-max rounded-2xl">
          <MdOutlineSecurity className="text-primary w-4 h-4" />
          <span className="font-semibold">Enterprise Security</span>
        </div>
        <div>
          <h2 className="text-white text-3xl font-bold">
            Protect Your Digital Assets
          </h2>
        </div>
        <div>
          <article className="text-gray-600 w-[300px] md:w-[600px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            perferendis nesciunt perspiciatis maxime delectus!
          </article>
        </div>
        <div>
          <Button title="Schedule Consultation" icon={<FaCalendarCheck />} />
        </div>
      </div>

      <div className="mt-8 flex justify-between gap-10 px-10">
        <div className="flex flex-col gap-2">
          <span className="text-primary font-semibold text-2xl md:text-3xl">
            500+
          </span>
          <span className="capitalize text-xl text-gray-600">
            Clients Protected
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-primary font-semibold text-2xl md:text-3xl">
            24/7
          </span>
          <span className="capitalize text-xl text-gray-600">
            Threat Monitoring
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-primary font-semibold text-2xl md:text-3xl">
            99.9%
          </span>
          <span className="capitalize text-xl text-gray-600">Uptime SLA</span>
        </div>
      </div>

      <div className="mt-6">
        <img
          src="https://plus.unsplash.com/premium_photo-1676618539992-21c7d3b6df0f?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full w-[350px] md:h-[500px] opacity-30"
        />
      </div>
    </header>
  );
};

export default Header;

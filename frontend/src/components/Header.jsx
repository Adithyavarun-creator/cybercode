import HeaderImage from "../assets/header.jpg";
import { Button } from "./Button";
import { FaCalendarCheck } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

const Header = () => {
  return (
    <header className="mt-20 md:mt-16 flex flex-col relative">
      {/* Background Image */}
      <div>
        <img
          src={HeaderImage}
          className="w-full h-[350px] sm:h-[450px] md:h-[550px] object-cover opacity-40"
          alt="header"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute top-16 sm:top-20 px-4 sm:px-8 md:px-10 flex flex-col gap-4 sm:gap-6 max-w-full">
        <div className="flex items-center gap-2 text-primary border border-text-primary px-3 py-1 bg-blue-100 w-max rounded-2xl text-xs sm:text-sm">
          <MdOutlineSecurity className="w-4 h-4" />
          <span className="font-semibold">Enterprise Security</span>
        </div>

        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-tight max-w-[90%]">
          Protect Your Digital Assets
        </h2>

        <article className="text-gray-600 text-sm sm:text-base max-w-[90%] md:max-w-[600px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          perferendis nesciunt perspiciatis maxime delectus!
        </article>

        <div>
          <Button title="Schedule Consultation" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-6 flex flex-wrap justify-center md:justify-between gap-6 px-4 md:px-10 text-center md:text-left">
        <div className="flex flex-col gap-1">
          <span className="text-primary font-semibold text-lg sm:text-xl md:text-3xl">
            500+
          </span>
          <span className="text-xs sm:text-sm md:text-xl text-gray-600">
            Clients Protected
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-primary font-semibold text-lg sm:text-xl md:text-3xl">
            24/7
          </span>
          <span className="text-xs sm:text-sm md:text-xl text-gray-600">
            Threat Monitoring
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-primary font-semibold text-lg sm:text-xl md:text-3xl">
            99.9%
          </span>
          <span className="text-xs sm:text-sm md:text-xl text-gray-600">
            Uptime SLA
          </span>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="mt-6 px-4 md:px-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1676618539992-21c7d3b6df0f?q=80&w=2064&auto=format&fit=crop"
          alt=""
          className="w-full max-w-[350px] mx-auto md:max-w-full md:h-[500px] object-cover opacity-30"
        />
      </div>
    </header>
  );
};

export default Header;

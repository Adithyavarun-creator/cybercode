import { FaStar } from "react-icons/fa";
import { SiTestcafe } from "react-icons/si";

export const Trust = () => {
  return (
    <section className="mt-10 px-12 flex flex-col gap-6">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-sm md:text-2xl text-white text-center font-semibold">
          Trusted by Industry Leaders
        </h2>
        <span className="text-xs md:text-xl text-gray-500 text-center md:text-start">
          See what our clients say about their experience with CyberShield
        </span>
      </div>

      <div className="mt-6 md:mt-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col cursor-pointer gap-2 md:gap-4 border border-gray-800 text-white px-6 py-4 rounded-2xl hover:border-blue-900 transition-all duration-200 ease-in-out">
          <div className="flex items-center justify-center md:flex md:items-center gap-2">
            <FaStar className="text-primary w-5 h-5" />
            <FaStar className="text-primary w-5 h-5" />
            <FaStar className="text-primary w-5 h-5" />
            <FaStar className="text-primary w-5 h-5" />
            <FaStar className="text-primary w-5 h-5" />
          </div>
          <article className="text-xs mb-2 md:text-xl text-white text-center md:text-start">
            "CyberShield transformed our security posture. Their proactive
            approach and expert team gave us peace of mind."
          </article>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div>
              <span className="w-10 h-10 text-white font-semibold p-2 bg-blue-950 rounded-3xl">
                SJ
              </span>
            </div>
            <div className="flex flex-col gap-1 text-white">
              <span className="text-sm">Sarah Chen</span>
              <span className="text-xs text-gray-400">CTO at FinanceFlow</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col cursor-pointer gap-2 md:gap-4 border border-gray-800 text-white px-6 py-4 rounded-2xl hover:border-blue-900 transition-all duration-200 ease-in-out">
          <div className="flex items-center justify-center md:flex md:items-center gap-2">
            <FaStar className="text-primary w-5 h-5" />
            <FaStar className="text-primary w-5 h-5" />
            <FaStar className="text-primary w-5 h-5" />
            <FaStar className="text-primary w-5 h-5" />
            <FaStar className="text-primary w-5 h-5" />
          </div>
          <article className="text-xs mb-2 md:text-xl text-white text-center md:text-start">
            "CyberShield transformed our security posture. Their proactive
            approach and expert team gave us peace of mind."
          </article>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div>
              <span className="w-10 h-10 text-white font-semibold p-2 bg-blue-950 rounded-3xl">
                MJ
              </span>
            </div>
            <div className="flex flex-col gap-1 text-white">
              <span className="text-sm">Marcus Johnson</span>
              <span className="text-xs text-gray-400">
                Security Director at TechCorp
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col cursor-pointer gap-2 md:gap-4 border border-gray-800 text-white px-6 py-4 rounded-2xl hover:border-blue-900 transition-all duration-200 ease-in-out">
          <div className="flex items-center justify-center md:flex md:items-center gap-2">
            <FaStar className="text-primary w-5 h-5" />
            <FaStar className="text-primary w-5 h-5" />
            <FaStar className="text-primary w-5 h-5" />
            <FaStar className="text-primary w-5 h-5" />
            <FaStar className="text-primary w-5 h-5" />
          </div>
          <article className="text-xs mb-2 md:text-xl text-white text-center md:text-start">
            "Compliance was stressful until we partnered with CyberShield. They
            simplified everything and kept us protected."
          </article>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div>
              <span className="w-10 h-10 text-white font-semibold p-2 bg-blue-950 rounded-3xl">
                ER
              </span>
            </div>
            <div className="flex flex-col gap-1 text-white">
              <span className="text-sm">Emma Rodriguez</span>
              <span className="text-xs text-gray-400">CEO at HealthPlus</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col cursor-pointer gap-2 md:gap-4 border border-gray-800 text-white px-6 py-4 rounded-2xl hover:border-blue-900 transition-all duration-200 ease-in-out">
          <div className="flex items-center justify-center md:flex md:items-center gap-2">
            <FaStar className="text-primary w-5 h-5" />
            <FaStar className="text-primary w-5 h-5" />
            <FaStar className="text-primary w-5 h-5" />
            <FaStar className="text-primary w-5 h-5" />
            <FaStar className="text-primary w-5 h-5" />
          </div>
          <article className="text-xs mb-2 md:text-xl text-white text-center md:text-start">
            "24/7 support is incredible. Every time we've needed them, they
            respond immediately with solutions."
          </article>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div>
              <span className="w-10 h-10 text-white font-semibold p-2 bg-blue-950 rounded-3xl">
                DK
              </span>
            </div>
            <div className="flex flex-col gap-1 text-white">
              <span className="text-sm">David Kim</span>
              <span className="text-xs text-gray-400">
                IT Manager at RetailCo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

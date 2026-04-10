import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Questions = () => {
  const [toggleq1, setToggleq1] = useState(true);
  const [toggleq2, setToggleq2] = useState(true);
  const [toggleq3, setToggleq3] = useState(true);
  const [toggleq4, setToggleq4] = useState(true);
  const [toggleq5, setToggleq5] = useState(true);
  const [toggleq6, setToggleq6] = useState(true);

  return (
    <section className="mt-10 px-12 flex flex-col gap-6">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-xl md:text-3xl text-white text-center font-semibold">
          Frequently Asked Questions
        </h2>
        <span className="text-sm md:text-xl text-gray-500 text-center md:text-start">
          Find answers to common questions about our services and security
          solutions
        </span>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col gap-2 border border-gray-800 rounded-2xl w-full md:w-[70%] px-6 py-3">
          <div className="flex flex-row gap-2 items-center justify-between text-white">
            <span
              className="font-semibold cursor-pointer"
              onClick={() => setToggleq1(!toggleq1)}
            >
              What makes CyberShield different from other cybersecurity
              providers ?
            </span>
            <span onClick={() => setToggleq1(!toggleq1)}>
              {toggleq1 ? (
                <IoIosArrowUp className="text-primary font-bold h-5 w-5 cursor-pointer" />
              ) : (
                <IoIosArrowDown className="text-primary font-bold h-5 w-5 cursor-pointer" />
              )}
            </span>
          </div>

          {toggleq1 && (
            <div className="py-4">
              <article className="text-gray-400">
                CyberShield combines cutting-edge AI-powered threat detection
                with expert human analysts. We provide 24/7 monitoring, rapid
                incident response, and proactive threat intelligence
                specifically tailored to your industry and business size.
              </article>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 border border-gray-800 rounded-2xl w-full md:w-[70%] px-6 py-3">
          <div className="flex flex-row gap-2 items-center justify-between text-white">
            <span
              className="font-semibold cursor-pointer"
              onClick={() => setToggleq2(!toggleq2)}
            >
              How quickly can you respond to security incidents ?
            </span>
            <span onClick={() => setToggleq2(!toggleq2)}>
              {toggleq2 ? (
                <IoIosArrowUp className="text-primary font-bold h-5 w-5 cursor-pointer" />
              ) : (
                <IoIosArrowDown className="text-primary font-bold h-5 w-5 cursor-pointer" />
              )}
            </span>
          </div>

          {toggleq2 && (
            <div className="py-4">
              <article className="text-gray-400">
                Our average incident response time is under 15 minutes. Our
                dedicated security operations center (SOC) monitors threats
                24/7/365, and our experienced team is always ready to mitigate
                damage and restore your systems.
              </article>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 border border-gray-800 rounded-2xl w-full md:w-[70%] px-6 py-3">
          <div className="flex flex-row gap-2 items-center justify-between text-white">
            <span
              className="font-semibold cursor-pointer"
              onClick={() => setToggleq3(!toggleq3)}
            >
              Are you compliant with industry standards ?
            </span>
            <span onClick={() => setToggleq3(!toggleq3)}>
              {toggleq3 ? (
                <IoIosArrowUp className="text-primary font-bold h-5 w-5 cursor-pointer" />
              ) : (
                <IoIosArrowDown className="text-primary font-bold h-5 w-5 cursor-pointer" />
              )}
            </span>
          </div>

          {toggleq3 && (
            <div className="py-4">
              <article className="text-gray-400">
                Yes, we're certified in ISO 27001, SOC 2 Type II, and maintain
                compliance with GDPR, HIPAA, PCI-DSS, and other major
                regulations. We help ensure your business meets all necessary
                compliance requirements.
              </article>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 border border-gray-800 rounded-2xl w-full md:w-[70%] px-6 py-3">
          <div className="flex flex-row gap-2 items-center justify-between text-white">
            <span
              className="font-semibold cursor-pointer"
              onClick={() => setToggleq4(!toggleq4)}
            >
              What industries do you serve ?
            </span>
            <span onClick={() => setToggleq4(!toggleq4)}>
              {toggleq4 ? (
                <IoIosArrowUp className="text-primary font-bold h-5 w-5 cursor-pointer" />
              ) : (
                <IoIosArrowDown className="text-primary font-bold h-5 w-5 cursor-pointer" />
              )}
            </span>
          </div>

          {toggleq4 && (
            <div className="py-4">
              <article className="text-gray-400">
                We serve a wide range of industries including finance,
                healthcare, retail, technology, manufacturing, and government.
                Our solutions are customizable for any industry with specific
                security needs.
              </article>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 border border-gray-800 rounded-2xl w-full md:w-[70%] px-6 py-3">
          <div className="flex flex-row gap-2 items-center justify-between text-white">
            <span
              className="font-semibold cursor-pointer"
              onClick={() => setToggleq5(!toggleq5)}
            >
              Can you work with our existing security infrastructure ?
            </span>
            <span onClick={() => setToggleq5(!toggleq5)}>
              {toggleq5 ? (
                <IoIosArrowUp className="text-primary font-bold h-5 w-5 cursor-pointer" />
              ) : (
                <IoIosArrowDown className="text-primary font-bold h-5 w-5 cursor-pointer" />
              )}
            </span>
          </div>

          {toggleq5 && (
            <div className="py-4">
              <article className="text-gray-400">
                Absolutely. We specialize in integrating with your current
                systems. Our team conducts a thorough assessment and creates a
                seamless integration plan with minimal operational disruption.
              </article>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 border border-gray-800 rounded-2xl w-full md:w-[70%] px-6 py-3">
          <div className="flex flex-row gap-2 items-center justify-between text-white">
            <span
              className="font-semibold cursor-pointer"
              onClick={() => setToggleq6(!toggleq6)}
            >
              What is your pricing model ?
            </span>
            <span onClick={() => setToggleq6(!toggleq6)}>
              {toggleq6 ? (
                <IoIosArrowUp className="text-primary font-bold h-5 w-5 cursor-pointer" />
              ) : (
                <IoIosArrowDown className="text-primary font-bold h-5 w-5 cursor-pointer" />
              )}
            </span>
          </div>

          {toggleq6 && (
            <div className="py-4">
              <article className="text-gray-400">
                We offer flexible pricing based on your organization's size,
                security requirements, and service level. Contact our sales team
                for a customized quote based on your specific needs.
              </article>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Questions;

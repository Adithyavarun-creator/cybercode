import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import CrownSvg from "../assets/crownsvg.svg";
import MedalSvg from "../assets/medalsvg.svg";

const DashboardContent = () => {
  const [showCrown, setShowCrown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCrown(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="text-white text-2xl mt-20 flex flex-col gap-4">
      <div className="flex justify-center items-center mt-4">
        <h2 className="mx-auto">Pick a Plan that benefits you </h2>
      </div>
      <div className="grid grid-cols-3 justify-center gap-10 mt-10">
        <div className="flex flex-col justify-center items-center gap-3 border text-sm border-gray-600 w-[250px] rounded-2xl px-4 py-4 cursor-pointer">
          <div>
            <h2 className="text-2xl font-semibold font-secondary">Free</h2>
          </div>
          <div className="flex items-center">
            <span className="text-gray-400 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              commodi fuga dolor excepturi
            </span>
          </div>
          <div>
            <strong className="text-3xl font-semibold">$0</strong>
            <span>/ for month</span>
          </div>
          <div className="mt-2">
            <span className="text-xl">Includes</span>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <li className="list-disc mx-auto">Lorem ipsum dolor sit.</li>
            <li className="list-disc mx-auto">Lorem ipsum dolor sit.</li>
            <li className="list-disc mx-auto">Lorem ipsum dolor sit.</li>
            <li className="list-disc mx-auto">Lorem ipsum dolor sit.</li>
          </div>
          <div className="mt-2">
            {/* <button>Get Started</button> */}
            <Button title="Get Started" width="100%" />
          </div>
        </div>

        <div className="relative flex flex-col justify-center items-center gap-3 border text-sm border-gray-600 w-[250px] rounded-2xl px-4 py-4 cursor-pointer">
          <div>
            <h2 className="text-2xl font-semibold font-secondary">Elite</h2>
          </div>
          <div className="flex items-center">
            <span className="text-gray-400 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              commodi fuga dolor excepturi
            </span>
          </div>
          <div>
            <strong className="text-3xl font-semibold">$10</strong>
            <span>/ for month</span>
          </div>
          <div className="mt-2">
            <span className="text-xl">Includes</span>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <li className="list-disc mx-auto">Lorem ipsum dolor sit.</li>
            <li className="list-disc mx-auto">Lorem ipsum dolor sit.</li>
            <li className="list-disc mx-auto">Lorem ipsum dolor sit.</li>
            <li className="list-disc mx-auto">Lorem ipsum dolor sit.</li>
          </div>
          <div className="mt-2">
            {/* <button>Get Started</button> */}
            <Button title="Get Started" width="100%" />
          </div>
          {showCrown && (
            <div className="absolute -top-8 right-0">
              <img src={MedalSvg} className="h-16 w-16" />
            </div>
          )}
        </div>

        <div className="relative flex flex-col justify-center items-center gap-3 border text-sm border-gray-600 w-[250px] rounded-2xl px-4 py-4 cursor-pointer">
          <div>
            <h2 className="text-2xl font-semibold font-secondary">Pro</h2>
          </div>
          <div className="flex items-center">
            <span className="text-gray-400 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              commodi fuga dolor excepturi
            </span>
          </div>
          <div>
            <strong className="text-3xl font-semibold">$50</strong>
            <span>/ for month</span>
          </div>
          <div className="mt-2">
            <span className="text-xl">Includes</span>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <li className="list-disc mx-auto">Lorem ipsum dolor sit.</li>
            <li className="list-disc mx-auto">Lorem ipsum dolor sit.</li>
            <li className="list-disc mx-auto">Lorem ipsum dolor sit.</li>
            <li className="list-disc mx-auto">Lorem ipsum dolor sit.</li>
          </div>
          <div className="mt-2">
            {/* <button>Get Started</button> */}
            <Button title="Get Started" width="100%" />
          </div>
          {showCrown && (
            <div className="absolute -top-8 right-0">
              <img src={CrownSvg} className="h-12 w-12" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DashboardContent;

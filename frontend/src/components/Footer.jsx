import Logo from "./Logo";

const Footer = () => {
  return (
    <>
      <footer id="contact" className="flex flex-col gap-10 px-6 md:px-14 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 justify-between gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <Logo />
            </div>
            <div>
              <span className="text-sm md:text-xl text-gray-600">
                Enterprise cybersecurity solutions you can trust.
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-sm md:text-xl text-white font-semibold">
                Services
              </h2>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs md:text-sm text-gray-600">
                Penetration Testing
              </span>
              <span className="text-xs md:text-sm text-gray-600">
                Threat Monitoring
              </span>
              <span className="text-xs md:text-sm text-gray-600">
                Incident Response
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-sm md:text-xl text-white font-semibold">
                Company
              </h2>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs md:text-sm text-gray-600">About</span>
              <span className="text-xs md:text-sm text-gray-600">Blog </span>
              <span className="text-xs md:text-sm text-gray-600">Careers</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-sm md:text-xl text-white font-semibold">
                Contact
              </h2>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs md:text-sm text-gray-600">
                hello@cybershield.com
              </span>
              <span className="text-xs md:text-sm text-gray-600">
                +1 (234) 567-890 24/7
              </span>
              <span className="text-xs md:text-sm text-gray-600">
                Security Hotline
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between">
          <div className="flex flex-1">
            <span className="text-gray-600 text-xs md:text-sm">
              © 2025 CyberShield. All rights reserved.
            </span>
          </div>
          <div className="mt-4 md:mt-0 flex flex-row gap-6 items-center">
            <span className="text-xs md:text-sm text-gray-600">
              Privacy Policy
            </span>
            <span className="text-xs md:text-sm text-gray-600">
              Terms of Service
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

export const Process = () => {
  return (
    <section id="about" className="mt-10 px-12 flex flex-col gap-6">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-sm md:text-3xl text-white text-center font-semibold">
          Our Security Process
        </h2>
        <span className="text-sm md:text-xl text-gray-500 text-center md:text-start">
          A proven six-step approach to building enterprise-grade security for
          your organization
        </span>
      </div>

      <div className="mt-10 md:mt-4 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10">
        <div className="flex cursor-pointer gap-4 md:gap-8 text-white px-2 py-2 md:px-6 md:py-4 rounded-2xl">
          <div className="mt-2">
            <span className="w-10 h-10 text-primary p-2 font-semibold text-sm md:text-xl bg-blue-950 rounded-3xl">
              01
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="sm:text-sm md:text-3xl font-semibold">
              Penetration Testing
            </span>
            <article className="text-xs md:text-sm text-gray-500">
              Comprehensive security assessments to identify vulnerabilities
              before attackers do.
            </article>
          </div>
        </div>

        <div className="flex cursor-pointer gap-4 md:gap-8 text-white px-2 py-2 md:px-6 md:py-4 rounded-2xl">
          <div className="mt-2">
            <span className="w-10 h-10 text-primary p-2 font-semibold text-sm md:text-xl bg-blue-950 rounded-3xl">
              02
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="sm:text-sm md:text-3xl font-semibold">
              Customized Strategy
            </span>
            <article className="text-xs md:text-sm text-gray-500">
              Based on findings, we develop a tailored security roadmap aligned
              with your business goals and compliance requirements.
            </article>
          </div>
        </div>

        <div className="flex cursor-pointer gap-4 md:gap-8 text-white px-2 py-2 md:px-6 md:py-4 rounded-2xl">
          <div className="mt-2">
            <span className="w-10 h-10 text-primary p-2 font-semibold text-sm md:text-xl bg-blue-950 rounded-3xl">
              03
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="sm:text-sm md:text-3xl font-semibold">
              Implementation
            </span>
            <article className="text-xs md:text-sm text-gray-500">
              Our experts deploy advanced security solutions with minimal
              disruption to your operations.
            </article>
          </div>
        </div>

        <div className="flex cursor-pointer gap-4 md:gap-8 text-white px-2 py-2 md:px-6 md:py-4 rounded-2xl">
          <div className="mt-2">
            <span className="w-10 h-10 text-primary p-2 font-semibold text-sm md:text-xl bg-blue-950 rounded-3xl">
              04
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="sm:text-sm md:text-3xl font-semibold">
              Continuous Monitoring
            </span>
            <article className="text-xs md:text-sm text-gray-500">
              Real-time threat detection and response, with 24/7 monitoring to
              ensure ongoing protection.
            </article>
          </div>
        </div>

        <div className="flex cursor-pointer gap-4 md:gap-8 text-white px-2 py-2 md:px-6 md:py-4 rounded-2xl">
          <div className="mt-2">
            <span className="w-10 h-10 text-primary p-2 font-semibold text-sm md:text-xl bg-blue-950 rounded-3xl">
              05
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="sm:text-sm md:text-3xl font-semibold">
              Regular Updates
            </span>
            <article className="text-xs md:text-sm text-gray-500">
              Stay ahead of evolving threats with scheduled security updates and
              proactive threat intelligence.
            </article>
          </div>
        </div>

        <div className="flex cursor-pointer gap-4 md:gap-8 text-white px-2 py-2 md:px-6 md:py-4 rounded-2xl">
          <div className="mt-2">
            <span className="w-10 h-10 text-primary p-2 font-semibold text-sm md:text-xl bg-blue-950 rounded-3xl">
              06
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="sm:text-sm md:text-3xl font-semibold">
              Expert Support
            </span>
            <article className="text-xs md:text-sm text-gray-500">
              Dedicated security team available round-the-clock to handle
              incidents and answer your questions.
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

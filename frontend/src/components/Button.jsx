export const Button = ({ title, type = "submit", icon }) => {
  return (
    <button
      type={type}
      className="flex w-[200px] md:w-auto flex-row items-center justify-center gap-2 bg-primary px-10 py-3 text-center text-white font-semibold cursor-pointer rounded-xl capitalize
      hover:bg-blue-500 transition-all duration-100 ease-in-out"
    >
      {title} {icon ? icon : ""}
    </button>
  );
};

export const SpinnerButton = () => {
  return (
    <button className="bg-primary w-[200px] md:w-auto px-10 py-3 text-center text-white font-semibold cursor-pointer rounded-xl capitalize">
      <span className="loader"></span>
    </button>
  );
};

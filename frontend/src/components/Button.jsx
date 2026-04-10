export const Button = ({ title, type = "submit", icon }) => {
  return (
    <button
      type={type}
      className="flex w-auto text-sm md:text-xl md:w-auto flex-row items-center justify-center gap-2 bg-primary px-10 py-3 text-center text-white font-semibold cursor-pointer rounded-xl capitalize
      hover:bg-blue-500 transition-all duration-100 ease-in-out"
    >
      {title} {icon ? icon : ""}
    </button>
  );
};

export const SpinnerButton = () => {
  return (
    <button
      className="flex w-auto text-sm md:text-xl md:w-auto flex-row items-center justify-center gap-2 bg-primary px-10 py-3 text-center text-white font-semibold cursor-pointer rounded-xl capitalize
      hover:bg-blue-500 transition-all duration-100 ease-in-out"
    >
      <span className="loader"></span>
    </button>
  );
};

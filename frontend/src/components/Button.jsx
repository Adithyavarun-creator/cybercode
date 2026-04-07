export const Button = ({ title, width, type = "submit", icon }) => {
  return (
    <button
      type={type}
      style={{ width }}
      className="flex flex-row items-center gap-2 bg-primary px-10 py-3 text-center text-white font-semibold cursor-pointer rounded-xl capitalize
      hover:bg-blue-500 transition-all duration-100 ease-in-out"
    >
      {title} {icon ? icon : ""}
    </button>
  );
};

export const SpinnerButton = ({ width }) => {
  return (
    <button
      style={{ width }}
      className="bg-primary px-10 py-3 text-center text-white font-semibold cursor-pointer rounded-xl capitalize"
    >
      <span className="loader"></span>
    </button>
  );
};

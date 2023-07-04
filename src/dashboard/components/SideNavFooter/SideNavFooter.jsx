const SideNavFooter = () => {
  return (
    <div className="absolute w-10/12 bottom-0 left-4 mb-8">
      <ul className="flex justify-center items-center flex-wrap w-11/12 mx-auto">
        <li
          className="text-xs text-center text-gray-500 mr-4"
          style={{ fontSize: "0.6rem" }}
        >
          About
        </li>
        <li
          className="text-xs text-gray-500 mr-4"
          style={{ fontSize: "0.6rem" }}
        >
          Accessibility
        </li>
        <li
          className="text-xs text-center text-gray-500 mr-4"
          style={{ fontSize: "0.6rem" }}
        >
          Help
        </li>
        <li
          className="text-xs text-center text-gray-500 mr-2"
          style={{ fontSize: "0.6rem" }}
        >
          Privacy and Terms
        </li>
        <li
          className="text-xs text-center text-gray-500 mr-4"
          style={{ fontSize: "0.6rem" }}
        >
          Advertise
        </li>
        <li
          className="text-xs text-center text-gray-500"
          style={{ fontSize: "0.6rem" }}
        >
          more
        </li>
      </ul>
      <div className="text-center text-xs">
        <span className="text-sm text-indigo-500">spehre.io</span> &copy; 2023
      </div>
    </div>
  );
};

export default SideNavFooter;

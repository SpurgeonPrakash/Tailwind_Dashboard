import { faS } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Logo = () => {
  return (
    <div className="shadow-gray-600 w-1/5 h-full border-2 border-solid border-gray flex justify-center items-center">
      <FontAwesomeIcon icon={faS} className="text-indigo-600" />
      <span>spehre</span>
    </div>
  );
};

export default Logo;

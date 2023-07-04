import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Notifications = () => {
  return (
    <div className="flex">
      <div className="p-1 border-2 border-gray-300 px-2 ml-3.5 text-gray-500 text-lg flex justify-center items-center">
        <FontAwesomeIcon icon={faBell} />
      </div>
      <div className="p-1 border-2 border-gray-300 px-2 ml-3.5 flex justify-center items-center text-gray-500 text-lg">
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
    </div>
  );
};

export default Notifications;

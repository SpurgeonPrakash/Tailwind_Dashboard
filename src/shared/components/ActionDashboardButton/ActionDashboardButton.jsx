import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const ActionDashboardButton = ({ icon }) => {
  return (
    <button className="bg-indigo-600 rounded-full w-5 h-5 flex justif-center items-center p-1.5">
      <FontAwesomeIcon icon={icon} className="text-white w-11/12 h-11/12" />
    </button>
  );
};

ActionDashboardButton.propTypes = {
  icon: PropTypes.node.isRequired,
};

export default ActionDashboardButton;

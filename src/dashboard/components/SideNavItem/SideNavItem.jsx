import PropTypes from "prop-types";
import { NavLink, useRouteMatch } from "react-router-dom";

import "./SideNavItem.css";

import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideNavItem = ({ name, to }) => {
  let { url } = useRouteMatch();
  return (
    <NavLink
      className={`w-full inline-block px-2 py-3 text-sm text-indigo-500/50`}
      to={to === "" ? "/" : url + to}
      exact={to === "" ? true : false}
    >
      <span>
        <FontAwesomeIcon icon={faHouseUser} className={`mr-1`} />
      </span>{" "}
      <span>{name}</span>
    </NavLink>
  );
};

SideNavItem.propTypes = {
  name: PropTypes.string,
  to: PropTypes.string,
};

export default SideNavItem;

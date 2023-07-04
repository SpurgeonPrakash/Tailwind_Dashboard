import PropTypes from "prop-types";

import About from "../About/About";
import Skills from "../Skills/Skills";
import Posts from "../Posts/Posts";
import Spaces from "../Spaces/Spaces";

const ProfileNavItem = ({ section }) => {
  const findNavItem = () => {
    if (section === "about") {
      return <About />;
    } else if (section === "skills") {
      return <Skills />;
    } else if (section === "posts") {
      return <Posts />;
    } else {
      return <Spaces />;
    }
  };

  return (
    <div className="border border-solid border-black min-h-screen">
      {findNavItem()}
    </div>
  );
};

ProfileNavItem.propTypes = {
  section: PropTypes.string.isRequired,
};

export default ProfileNavItem;

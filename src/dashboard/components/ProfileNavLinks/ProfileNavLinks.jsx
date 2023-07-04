import PropTypes from "prop-types";

import "./ProfileNavLinks.css";

const ProfileNavLinks = ({ section, setSection }) => {
  return (
    <ul className="flex justify-between items-center">
      <li
        className={`py-2 px-6 cursor-pointer ${
          section === "about" && "border-b-4 border-solid border-indigo-600"
        }`}
        onClick={() => setSection("about")}
      >
        About
      </li>
      <li
        className={`py-2 px-6 cursor-pointer ${
          section === "skills" && "border-b-4 border-solid border-indigo-600"
        }`}
        onClick={() => setSection("skills")}
      >
        Skills & Certifications
      </li>
      <li
        className={`py-2 px-6 cursor-pointer ${
          section === "posts" && "border-b-4 border-solid border-indigo-600"
        }`}
        onClick={() => setSection("posts")}
      >
        Posts
      </li>
      <li
        className={`py-2 px-6 cursor-pointer ${
          section === "spaces" && "border-b-4 border-solid border-indigo-600"
        }`}
        onClick={() => setSection("spaces")}
      >
        Spaces
      </li>
    </ul>
  );
};

ProfileNavLinks.propTypes = {
  setSection: PropTypes.func.isRequired,
  section: PropTypes.string.isRequired,
};

export default ProfileNavLinks;

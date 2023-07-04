import { useState } from "react";

import ProfileNavItem from "../ProfileNavItem/ProfileNavItem";
import ProfileNavLinks from "../ProfileNavLinks/ProfileNavLinks";

const ProfileNavigation = () => {
  const [section, setSection] = useState("about");
  return (
    <div className="w-3/4 bg-gray-200 p-4">
      <div className="w-full bg-white mx-auto">
        <ProfileNavLinks section={section} setSection={setSection} />
        <ProfileNavItem section={section} />
      </div>
    </div>
  );
};

export default ProfileNavigation;

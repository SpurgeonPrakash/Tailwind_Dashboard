import { useState } from "react";

import UserImage from "../../../assets/user-image.jpg";
import { faUsers, faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  faDropbox,
  faGithub,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ActionDashboardButton from "../../../shared/components/ActionDashboardButton/ActionDashboardButton";
import ProfileGraph from "../ProfileGraph/ProfileGraph";
import Ranking from "../Ranking/Ranking";

const ProfileCard = () => {
  const [name] = useState("Ayaat Khanna");
  const [role] = useState("UI/UX Designer");
  const [followers] = useState(24);
  const [following] = useState(43);
  return (
    <div className="w-3/12 p-4 shadow-gray-600/50 border-2 border-solid border-gray">
      <div className="relative flex justify-center items-center">
        <div>
          <div className="w-36 h-36 absolute -top-24 left-8">
            <img
              src={UserImage}
              alt="user_image"
              className="w-full h-full rounded-full border-2 border-solid border-white"
            />
          </div>
          <h3 className="font-bold mt-12 text-center">{name}</h3>
          <p className="text-sm text-gray-400 text-center">{role}</p>
          <span>
            <FontAwesomeIcon icon={faUsers} className="mr-1" />
          </span>
          <span className="text-sm mr-1">{followers} followers</span>
          <span className="text-sm">{following} following</span>
        </div>
      </div>
      <div className=" flex mt-4">
        <h3 className="font-medium font-semibold text-xs w-11/12">
          Make my profile visible to employers
        </h3>
        <div className="w-8 h-4 rounded-t-xl rounded-b-xl bg-indigo-600 relative">
          <div className="absolute right-0 w-1/2 h-full bg-white rounded-t-xl rounded-b-xl border border-solid border-indigo-500"></div>
        </div>
      </div>
      <div className="text-xs text-gray-400 w-full mt-2 mb-4">
        Lorem ipsum dolor sit amet cons, adipisicing elit. Voluptatibus, quasi.
      </div>

      <div>
        <div className="flex justify-between items-center">
          <h4 className="font-semibold text-xs">Online Links</h4>
          <ActionDashboardButton icon={faPlus} />
        </div>
        <p className="text-xs text-gray-400">
          Lorem ipsum dolor sit amet cons jhgj jdklk.
        </p>
      </div>

      <div className="bg-gray-200 p-3 mt-4">
        <div className="flex justify-center">
          <FontAwesomeIcon icon={faDropbox} className="mr-2 text-blue-500" />
          <FontAwesomeIcon icon={faGithub} className="mr-2 text-green-500" />
          <FontAwesomeIcon icon={faSlack} className="text-red-500" />
        </div>
      </div>

      <ProfileGraph />
      <Ranking />
    </div>
  );
};

export default ProfileCard;

import PropTypes from "prop-types";

import CommunityImage from "../../../assets/pro-pic.png";
const CommunityItem = ({ title, members }) => {
  return (
    <div className="w-full">
      <div className="flex text-xs items-center">
        <div className="w-9 h-9 border-1 mr-2 mb-4">
          <img
            src={CommunityImage}
            className="w-full h-full rounded-full"
            alt="communityImage"
          />
        </div>

        <div>
          <h3>{title}</h3>
          <p className="text-gray-400" style={{ fontSize: "0.7rem" }}>
            {members}
          </p>
        </div>
      </div>
    </div>
  );
};

CommunityItem.propTypes = {
  title: PropTypes.string,
  members: PropTypes.string,
};

export default CommunityItem;

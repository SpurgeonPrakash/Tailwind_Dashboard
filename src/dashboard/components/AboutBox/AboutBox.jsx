import PropTypes from "prop-types";

import { faPencil, faPlus } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ActionDashboardButton from "../../../shared/components/ActionDashboardButton/ActionDashboardButton";

const AboutBox = ({ content }) => {
  return (
    <>
      {content.map((con) => (
        <div className="flex" key={con.id}>
          <div className="px-4 mb-4 flex min-w-[90%]">
            <span className="mr-2 text-indigo-400 w-8 h-8 flex justify-center items-center border border-solid border-indigo-400 rounded-full">
              <FontAwesomeIcon icon={con.icon} className="text-lg" />
            </span>
            <div className="w-10/12">
              <h3 className="font-bold text-sm">{con.title}</h3>
              <p className="text-xs text-gray-500">{con.date}</p>
              <p className="text-xs text-gray-400 mb-4">{con.location}</p>
              {con.about && (
                <p className="text-xs">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                  quam earum tempore enim laudantium quod Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quibusdam, aliquam!
                  consectetur adipisicing elit. Quibusdam, aliquam!.
                </p>
              )}
            </div>
          </div>
          <div className="mr-6 flex">
            <ActionDashboardButton icon={faPlus} />
            <span className="ml-2">
              <ActionDashboardButton icon={faPencil} />
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

AboutBox.propTypes = {
  content: PropTypes.array.isRequired,
};

export default AboutBox;

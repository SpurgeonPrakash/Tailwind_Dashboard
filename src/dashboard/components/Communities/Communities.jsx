import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import CommunityItem from "../CommunityItem/CommunityItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Communities = () => {
  const CommunityList = [
    {
      id: "kjdhgfkjfdh",
      title: "Indonesia UI Designer",
      members: "734 members",
    },
    {
      id: "kjdhgfkjfdi",
      title: "Indonesia UX Research",
      members: "125 members",
    },
    {
      id: "kjdhgfkjfdj",
      title: "Prototyping Club",
      members: "891 members",
    },
  ];
  return (
    <div className="mt-6">
      <h1 className="font-extrabold mb-4">Communities Feed</h1>
      {CommunityList.map((cl) => (
        <CommunityItem key={cl.id} title={cl.title} members={cl.members} />
      ))}
      <p className="text-xs text-center text-gray-500">
        Show 5 More <FontAwesomeIcon icon={faChevronRight} />
      </p>
    </div>
  );
};

export default Communities;

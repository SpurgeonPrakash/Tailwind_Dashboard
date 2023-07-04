import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Searchbox = () => {
  return (
    <div className="border-2 border-solid border-gray-300 rounded flex items-center">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="text-gray-500 px-2 border-r-2 border-gray-400"
      />
      <input
        type="text"
        name="search"
        id=""
        placeholder="Search"
        className="text-xs text-gray-200 w-64 ml-2"
      />
    </div>
  );
};

export default Searchbox;

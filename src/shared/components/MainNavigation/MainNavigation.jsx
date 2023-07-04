import Logo from "../Logo/Logo";
import Notifications from "../Notifications/Notifications";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import Searchbox from "../Searchbox/Searchbox";
const MainNavigation = () => {
  return (
    <div className="shadow-sm shadow-gray-600/50 h-11 flex justify-between items-center">
      <Logo />
      <div className="flex h-4/5">
        <Searchbox />
        <Notifications />
        <ProfileIcon />
      </div>
    </div>
  );
};

export default MainNavigation;

import Banner from "../Banner/Banner";
import ProfileCard from "../ProfileCard/ProfileCard";
import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";

const HomePage = () => {
  return (
    <div className="w-full">
      <Banner />
      <div className="w-full flex">
        <ProfileCard />
        <ProfileNavigation />
      </div>
    </div>
  );
};

export default HomePage;

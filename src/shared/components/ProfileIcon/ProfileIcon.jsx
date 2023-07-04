import ProfilePic from "../../../assets/pro-pic.png";
const ProfileIcon = () => {
  return (
    <div className="w-9 h-9 flex justify-center items-center border-2 border-solid border-gray-300 rounded mx-3 rounded-full">
      <img src={ProfilePic} className="w-full h-full" alt="profile_pic" />
    </div>
  );
};

export default ProfileIcon;

import Communities from "../Communities/Communities";
import SideNavFooter from "../SideNavFooter/SideNavFooter";
import SideNavItem from "../SideNavItem/SideNavItem";

const SideNav = () => {
  const SideNavItems = [
    {
      id: "lkjbdfjkb",
      name: "Home",
      isActive: true,
      to: "",
    },
    {
      id: "lkjbdfjkc",
      name: "Jon Invites",
      isActive: false,
      to: "invites",
    },
    {
      id: "lkjbdfjkd",
      name: "Analytics",
      isActive: false,
      to: "analytics",
    },
    {
      id: "lkjbdfjke",
      name: "My Profile",
      isActive: false,
      to: "profile",
    },
    {
      id: "lkjbdfjkf",
      name: "Explore",
      isActive: false,
      to: "explore",
    },
  ];

  return (
    <div className="rounded w-1/5 p-3 min-h-screen border-2 border-solid border-gray shadow-gray-600/50 relative">
      <div className="mb-4">
        {SideNavItems.map((it) => {
          return <SideNavItem name={it.name} key={it.id} to={it.to} />;
        })}
      </div>
      <hr />
      <Communities />
      <SideNavFooter />
    </div>
  );
};

export default SideNav;

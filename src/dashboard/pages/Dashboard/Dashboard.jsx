import { Route, useRouteMatch } from "react-router-dom";
import SideNav from "../../components/SideNav/SideNav";
import HomePage from "../../components/HomePage/HomePage";
import InvitesPage from "../../components/InvitesPage/InvitesPage";
import AnalyticsPage from "../../components/AnalyticsPage/AnalyticsPage";
import ProfilePage from "../../components/ProfilePage/ProfilePage";
import ExplorePage from "../../components/ExplorePage/ExplorePage";

const Dashboard = () => {
  let { path } = useRouteMatch();
  return (
    <div className="flex">
      <SideNav />
      <div className="w-4/5">
        <Route path={`${path}invites`} exact component={InvitesPage} />
        <Route path={`${path}analytics`} exact component={AnalyticsPage} />
        <Route path={`${path}profile`} exact component={ProfilePage} />
        <Route path={`${path}explore`} exact component={ExplorePage} />
        <Route path={path} component={HomePage} exact />
      </div>
    </div>
  );
};

export default Dashboard;

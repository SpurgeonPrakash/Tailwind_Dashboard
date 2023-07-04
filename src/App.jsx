import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Dashboard from "./dashboard/pages/Dashboard/Dashboard";
import MainNavigation from "./shared/components/MainNavigation/MainNavigation";

export default function App() {
  const routes = (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Redirect to="/" />
    </Switch>
  );

  const appLayout = (
    <>
      <MainNavigation />
      {routes}
    </>
  );

  return <>{appLayout}</>;
}

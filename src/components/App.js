import { BrowserRouter, Switch, Route } from "react-router-dom";
import Gain from "./add-entry/Gain";
import Lost from "./add-entry/Lost";
import HomePage from "./home-page/HomePage";
import SignIn from "./login/SignIn";
import SignUp from "./login/SignUp";

export default function () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sign-in" exact>
          <SignIn></SignIn>
        </Route>
        <Route path="/sign-up">
          <SignUp></SignUp>
        </Route>
        <Route path="/" exact>
          <HomePage></HomePage>
        </Route>
        <Route path="/new-gain" exact>
          <Gain></Gain>
        </Route>
        <Route path="/new-lost" exact>
          <Lost></Lost>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

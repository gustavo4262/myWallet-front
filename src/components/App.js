import { BrowserRouter, Switch, Route } from "react-router-dom";
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
        <Route path="/">
          <HomePage></HomePage>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

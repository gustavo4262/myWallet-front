import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./login/SignIn";
import SignUp from "./login/SignUp";

export default function () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <SignIn></SignIn>
        </Route>
        <Route path="/sign-up">
          <SignUp></SignUp>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

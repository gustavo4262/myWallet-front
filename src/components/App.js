import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./login/SignIn";

export default function () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <SignIn></SignIn>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

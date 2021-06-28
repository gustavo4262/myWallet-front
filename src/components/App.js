import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AddRevenue from "./add-entry/AddRevenue";
import AddExpense from "./add-entry/AddExpense";
import HomePage from "./home-page/HomePage";
import SignIn from "./login/SignIn";
import SignUp from "./login/SignUp";
import UserContext from "../contexts/UserContext";
import { useState } from "react";

export default function () {
  const [user, setUser] = useState(localStorage.getItem("user"));

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Switch>
          <Route path="/" exact>
            {user ? <HomePage></HomePage> : <Redirect to="sign-in"></Redirect>}
          </Route>
          <Route path="/sign-in" exact>
            <SignIn></SignIn>
          </Route>
          <Route path="/sign-up">
            <SignUp></SignUp>
          </Route>
          <Route path="/new-revenue" exact>
            <AddRevenue></AddRevenue>
          </Route>
          <Route path="/new-expense" exact>
            <AddExpense></AddExpense>
          </Route>
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

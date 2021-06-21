import { Route, Switch} from "react-router-dom";
import Home from "./components/home";
import "./App.css"
import { Order } from "./pages/order-now";
import { Category } from "./pages/categories";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { NotFound } from "./pages/notfound";
import { Dashboard } from "./dashboard/dashboard";
import { Account } from "./Account/Account";

const App =()=>{
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={Order} />
        <Route path="/category" component={Category} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={ Register } />
        <Route path="/dashboard" component={ Dashboard } />
        <Route path="/account" component={ Account } />
        <Route component={NotFound} />
      </Switch>
    </>
  )
}

export default App;
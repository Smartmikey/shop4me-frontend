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
import Support from "./pages/support";
import * as dotenv from 'dotenv'
import CartPage from "./pages/cart";


dotenv.config()

const App =()=>{
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={Order} />
        <Route path="/category/:name" component={Category} />
        <Route path="/category" component={Category} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={ Register } />
        <Route path="/dashboard" component={ Dashboard } />
        <Route path="/account" component={ Account } />
        <Route path="/support" component={Support} />
        <Route path="/cart" component={CartPage} />

        <Route component={NotFound} />
      </Switch>
    </>
  )
}

export default App;
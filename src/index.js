import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './components/nav';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/footer';
import { ApolloProvider, createHttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from "apollo-upload-client";

import { setContext } from '@apollo/client/link/context';
import { Dashboard } from './dashboard/dashboard';
import { useCookies } from "react-cookie";
const httpLink = createUploadLink({
  uri: "https://shop-4-me.herokuapp.com/graphql",
  // 'http://localhost:5000/graphql',
  // credentials: 'include'
});

const authLink = setContext((_, { headers }) => {

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  // const [cookie] = useCookies('token')
  // get the authentication token from local storage if it exists
  const token = getCookie("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   credentials: 'include'
// });

ReactDOM.render(
  <React.StrictMode >
    <ApolloProvider client={client}>
      <Router>
        <Switch >
        <Route path="/dashboard" >
          <Dashboard />
        </Route>

          <Route path="/">
            <Nav />
            <App />
            <Footer />
          </Route>
        </Switch>
       
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import axios from "axios";
import { Link } from 'gatsby'

axios.defaults.baseURL = "http://localhost:3300/api";

axios.interceptors.request.use(function(requestConfig) {
  const token = localStorage.getItem("token");
  requestConfig.headers.authorization = token;
  return requestConfig;
});

export default function(Component) {
  return function Authenticated() {
    const token = localStorage.getItem("token");
    const notLoggedIn = <><h3>Please login to see users</h3> <Link to='/'>Home</Link></>;
    return <> {token ? <Component /> : notLoggedIn} </>;
  };
}

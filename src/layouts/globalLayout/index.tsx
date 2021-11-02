import React from "react";
import { Route } from "react-router-dom";
import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound";
import ProductList from "../../pages/ProductList";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "64px",
        top: 0,
        left: 0,
        background: "orange",
        zIndex: -1,
      }}
    ></div>
  );
};

interface Props {
  match: any;
}

const index = ({ match }: Props) => {
  return (
    <>
      <Route path={match.path} component={Header} />
      <Route
        path={`${match.path}productList`}
        exact={true}
        component={ProductList}
      />
      <Route path={`${match.path}login`} exact={true} component={Login} />
      <Route path={`${match.path}404`} exact={true} component={NotFound} />
    </>
  );
};

export default index;

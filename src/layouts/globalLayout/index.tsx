import React from "react";
import { Route } from "react-router-dom";
import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound";
import ProductList from "../../pages/ProductList";
import Header from "../Header";

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

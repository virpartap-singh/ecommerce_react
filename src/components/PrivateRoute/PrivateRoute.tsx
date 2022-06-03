import React from "react";
import { Route, Navigate } from "react-router-dom";
import useLocalStorage from "../../utils/localStorage";

interface IprivateRoute {
  children : React.ReactNode;
  redirectTo : string;
}

const PrivateRoute: React.FC<IprivateRoute> = ({
  children,
  redirectTo
}): JSX.Element => {
  let loginData: any = useLocalStorage.getItem("loginFormData");
  return loginData?.email.length ? (
    <>{children} </>
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default PrivateRoute;

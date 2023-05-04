import React, { useContext } from "react";
import { authContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(authContext);
    const location = useLocation()

  if (loading) {
    return (
      <div className="py-48 flex justify-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoutes;

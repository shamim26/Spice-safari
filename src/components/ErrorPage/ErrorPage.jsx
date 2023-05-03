import React from "react";
import error from "../../assets/errorImg.jpg";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const errorMessage = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center bg-white font-medium text-gray-500 py-16">
      <img className="w-1/3" src={error} alt="" />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <small>{errorMessage.statusText || errorMessage.message}</small>
      </p>
    </div>
  );
};

export default ErrorPage;

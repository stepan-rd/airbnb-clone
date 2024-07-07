import React from "react";
import rbnbLogoSmall from "@/assets/airbnb-small.svg";
import { useNavigate } from "react-router-dom";

type Props = {};

export function ErrorPage({}: Props) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col p-10">
      <div className="flex">
        <img src={rbnbLogoSmall} width="32" alt="" />
        <h1 className="ml-4 text-3xl font-SF-pro">404 Page not found.</h1>
      </div>
      <button
        onClick={() => navigate("/")}
        className="p-2 transition-all border rounded-lg shadow-md border-stone-200 hover:-translate-y-px active:translate-y-px"
      >
        Go Home
      </button>
    </div>
  );
}

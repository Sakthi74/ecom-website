import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Check = () => {
  const notify = () => {
    toast("LOGIN SUCCESSFUL✅", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: "bounce",
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="border-black p-4 border-2 text-black cursor-pointer"
        onClick={notify}
      >
        Click here to show toast
      </div>
      <ToastContainer />
    </div>
  );
};

export default Check;

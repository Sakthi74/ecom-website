import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleCheck = (e) => {
    e.preventDefault();
    if (username === "sakthi" && password === "123") {
      setUsername("");
      setPassword("");
      setError(false);
      notifi();
      navigate("/go");
    } else if (username === "admin" && password === "321") {
      setUsername("");
      setError(false);
      setPassword("");
      navigate("/Admin");
    } else {
      setError(true);
      alert("Invalid credentials");
    }
  };

  const handleReg = () => {
    navigate("/home");
  };

  const notifi = () => {
    toast("Login Successful", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="flex justify-center items-center bg-green-300 h-screen">
      <form
        className="flex flex-col bg-white border-black border-2 p-3 h-[400px]  w-96 rounded-2xl items-center gap-4"
        onSubmit={handleCheck}
      >
        <div className="flex">
          <span className="text-green-400 text-3xl font-bold">SAKTHI</span>
          <span className="p-1 font-dog text-3xl">Fruits</span>
        </div>
        <h1 className="text-green-400 font-bold mb-3 font-form">LOGIN</h1>
        <input
          type="text"
          placeholder="Username"
          required
          className="border-2 border-black rounded-xl bg-transparent p-3 w-72"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="border-2 border-black rounded-xl p-3 w-72 bg-transparent"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-600 ">Incorrect credentials</p>}
        <div className="flex gap-2">
          <button className="rounded-xl border-black text-white font-bold bg-green-300 hover:bg-blue-400  p-2 w-36">
            Submit
          </button>
          <button
            type="button"
            className="rounded-xl border-black text-white font-bold bg-green-300 hover:bg-blue-400  p-2 w-36"
            onClick={() => {
              setUsername("");
              setPassword("");
              setError(false);
            }}
          >
            Clear
          </button>
        </div>
        <div className="flex gap-2">
          <p>New to our site?</p>
          <a className="cursor-pointer hover:text-blue-400" onClick={handleReg}>
            Register
          </a>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Form;

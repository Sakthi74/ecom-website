import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setusername] = useState("");
  const [mail, setmail] = useState("");
  const [password, setPassword] = useState([]);
  const [confirmpassword, setconfirmpassword] = useState([]);
  const [Error, setError] = useState(false);
  const Navigate = useNavigate();

  const handlehome = (e) => {
    if (password === confirmpassword) {
      Navigate("/go");
    } else {
      setError(true);

      setTimeout(() => {
        alert("Password incorrect");
      }, 5000);
    }
  };

  return (
    <>
      <div className=" flex flex-row bg-green-300 h-screen justify-center items-center">
        <form
          className="flex flex-col bg-white justify-center items-center rounded-2xl p-16  gap-4"
          onSubmit={handlehome}
        >
          <div className="flex">
            <span className=" text-green-400 text-3xl font-bold">SAKTHI</span>
            <span className=" p-1 font-dog text-3xl">Fruits</span>
          </div>
          <h1 className=" text-green-400 ">REGISTER</h1>
          <input
            type="text"
            required
            placeholder="USERNAME"
            className="p-3  border-black border-2 w-72 rounded-2xl"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          ></input>
          <input
            type="email"
            required
            placeholder="Email"
            className="p-3  border-black border-2 w-72 rounded-2xl"
            value={mail}
            onChange={(e) => setmail(e.target.value)}
          ></input>
          <input
            type="password"
            required
            placeholder="Password"
            className="p-3  border-black border-2 w-72 rounded-2xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input
            type="password"
            required
            placeholder="confirm password"
            className="p-3  border-black border-2 w-72 rounded-2xl"
            value={confirmpassword}
            onChange={(e) => setconfirmpassword(e.target.value)}
          ></input>
          {Error && <p className="text-red-500">Enter Similar password</p>}
          <div className="flex gap-2">
            <button className="p-2 border-2 w-36  rounded-2xl bg-green-300 hover:bg-blue-400">
              Submit
            </button>
            <button
              className="p-2 border-2 w-36  rounded-2xl bg-green-300 hover:bg-blue-400"
              onClick={() => {
                setusername("");
                setmail("");
                setPassword("");
                setconfirmpassword("");
                setError(false);
              }}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;

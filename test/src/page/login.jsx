import { useState } from "react";
import React from "react";
import axios from "axios";
import { redirect } from "react-router-dom";
export default function Login() {
  const [userName, setUserName] = useState("");
  const [userpwd, setUserpwd] = useState("");
  const handleClick = async () => {
    const res = await axios.post("http://localhost:3030/api/user/login", {
      userName,userpwd,
    });
    if(!res.loginStatus){
      location.reload();
      return;
    }
    redirect('/loginn');
  };
  return (
    <div>
      <div className="place-items-center">
        <div className="flex flex-col m-40 border-black border-2 rounded-xl p-5 ">
          <input
            type="text"
            className="m-2 border-2 border-black p-2"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="user name"
          />
          <input
            type="text"
            className="m-2 border-2 border-black p-2"
            onChange={(e) => setUserpwd(e.target.value)}
            placeholder="password"
          />
          <button
            onClick={() => handleClick()}
            className="bg-black text-white rounded-xl m-5 ml-5 mr-5"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

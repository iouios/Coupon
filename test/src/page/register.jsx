import { useState } from "react";
import React from "react";
import axios from "axios";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [email, setemail] = useState("");
  const [pwd, setpwd] = useState("");
  const [storage, setStorage] = useState([]);
  const handleClick = async () => {
    const res = await axios.post("http://localhost:3030/api/user/create", {
      userName,
      pwd,
      email,
    });
    location.reload();
  };

  return (
    <React.Fragment>
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
            onChange={(e) => setemail(e.target.value)}
            placeholder="email"
          />
          <input
            type="text"
            className="m-2 border-2 border-black p-2"
            onChange={(e) => setpwd(e.target.value)}
            placeholder="password"
          />
          <button
            onClick={() => handleClick()}
            className="bg-black text-white rounded-xl m-5 ml-5 mr-5"
          >
            Submit
          </button>
        </div>
        <div className="flex flex-col border-black border-2 rounded-xl border-dotted">
          {storage.map((storages, key) => (
            <div className="" key={key}>
              <ul>
                <li>userName:{storages.userName}</li>
                <li>password:{storages.pwd}</li>
                <li>email:{storages.email}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

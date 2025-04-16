import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function Register() {
  const [Icon, setIcon] = useState(true);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const res = await fetch(`${API_URL}/auth/user/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: Email, password: Password }),
      });

      setMessage(res.message);
      toast(Message);
    } catch (error) {
      toast(Message);
    }
  };

  return (
    <>
      <>
        <div className="h-screen w-full bg-zinc-950 text-white p-5">
          <div className="flex justify-center items-center ">
            <div className="border border-purple-300 h-[27rem] w-[26rem] mt-20 rounded-md">
              <h3 className="text-center mt-4 text-3xl font-mono">Register</h3>
              <hr className="w-80 ml-10 mt-2 text-purple-300" />
              <form
                className="mt-5"
                action="#"
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <div className="text-center">
                  <label
                    className="text-2xl block mb-1 font-semi-bold font-mono "
                    htmlFor="Email"
                  >
                    Email
                  </label>
                  <hr className="w-40 ml-[7.7rem] mb-2 text-purple-300" />
                  <input
                    className="mt-2 w-90 bg-zinc-700 py-2 px-2  rounded-sm outline-none font-mono"
                    type="text"
                    id="Email"
                    name="email"
                    placeholder="Enter your email"
                    value={Email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <label
                    className="text-2xl block mb-1 mt-4 font-semi-bold font-mono "
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <hr className="w-50 ml-[6.4rem] mb-2 text-purple-300 " />

                  <input
                    className="mt-2 w-90 bg-zinc-700 py-2 px-2  rounded-sm outline-none font-mono"
                    type={Icon ? "password" : "text"}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={Password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIcon(!Icon);
                    }}
                  >
                    <i
                      className={
                        Icon
                          ? "ri-eye-off-line absolute -ml-10 -mt-5 text-gray-400 text-xl transition duration-200 ease-in"
                          : "ri-eye-line absolute -ml-10 -mt-5 text-gray-400 text-xl transition duration-200 ease-out "
                      }
                    ></i>
                  </button>
                  <div className=" ">
                    <button className="w-20 py-2 px-2 mt-10 bg-zinc-600 rounded-md font-mono hover:bg-zinc-500 ">
                      Login
                    </button>
                  </div>
                </div>
                <div className="mt-7 text-center text-xs">
                  <p>
                    comming back ?{" "}
                    <a className="text-blue-400 font-mono" href="/">
                      Login Here
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer theme="dark" autoClose={1000} />
      </>
    </>
  );
}

export default Register;

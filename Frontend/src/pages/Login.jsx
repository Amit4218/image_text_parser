import axios from "axios";
import React, { useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

function Login() {
  const [Icon, setIcon] = useState(true);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setloading(true);

    const data = { email: Email, password: Password };

    try {
      const API_URL = import.meta.env.VITE_API_URI_LOCAL;

      const res = await axios.post(`${API_URL}/auth/user/login`, data);

      localStorage.setItem("token", res.data.token);

      setEmail("");
      setPassword("");
      toast.success(res.data.message);

      setTimeout(() => navigate("/upload"), 800);
      setTimeout(() => setloading(false), 800);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed");
      setTimeout(() => setloading(false), 1200);
    }
  };

  const registerPage = (e) => {
    e.preventDefault();
    setloading(true);
    setTimeout(() => navigate("/register"), 800);
    setTimeout(() => setloading(false), 800);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="h-screen w-full bg-[#924DBF] text-white p-5">
          <div className="flex justify-center items-center ">
            <div className="">
              <div className="shadow-2xl  bg-[#7338A0] border border-purple-300 h-[27rem] w-[26rem] mt-20 rounded-md">
                <h3 className="text-center mt-4 text-3xl font-mono">Login</h3>
                <hr className="w-80 ml-10 mt-2 text-purple-300" />
                <form
                  className="mt-5"
                  action="#"
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <div className="text-center">
                    <label
                      className="text-2xl block mb-1 font-semi-bold font-mono  "
                      htmlFor="Email"
                    >
                      Email
                    </label>
                    <hr className="w-40 ml-[7.7rem] mb-2 text-purple-300" />
                    <input
                      className="mt-2 w-90 bg-[#9E72C3] py-2 px-2  rounded-sm outline-none font-mono"
                      type="email"
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
                      className="mt-2 w-90 bg-[#9E72C3] py-2 px-2  rounded-sm outline-none font-mono"
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
                            ? "ri-eye-off-line absolute -ml-10 -mt-5 text-[#7338A0] text-xl transition duration-200 ease-in"
                            : "ri-eye-line absolute -ml-10 -mt-5 text-[#7338A0] text-xl transition duration-200 ease-out "
                        }
                      ></i>
                    </button>
                    <div className=" ">
                      <button className="w-20 py-2 px-2 mt-10 bg-[#924DBF] rounded-md font-mono hover:bg-[#4A2574] ">
                        Login
                      </button>
                    </div>
                  </div>
                  <div className="mt-7 text-center text-xs">
                    <p>
                      New here ?{" "}
                      <a
                        className="text-blue-400 font-mono"
                        href="/register"
                        onClick={registerPage}
                      >
                        Register Here
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer theme="dark" autoClose={1000} transition={Slide} />
    </>
  );
}

export default Login;

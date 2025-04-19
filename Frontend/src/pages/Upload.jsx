import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Slide, ToastContainer, toast } from "react-toastify";
import UploadImg from "../services/Upload";
import Loading from "../components/Loading";

function Upload() {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);
  const [loading, setloading] = useState(false);

  const fileChangeHandler = (e) => {
    const file = e.target.files[0];

    setImage(file);
  };

  function logout() {
    setloading(true);
    const token = localStorage.setItem("token", "");
    toast.success("logout successfully");
    setTimeout(() => navigate("/"), 900);
    setTimeout(() => setloading(false), 900);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!image) return;

    UploadImg(image);

    fileInputRef.current.value = "";
    setImage(null);
  };

  const showHandler = () => {
    setloading(true);
    setTimeout(() => navigate("/show"), 1000);
    setTimeout(() => setloading(false), 1000);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="h-screen bg-[#7338A0] p-10 ">
          <div className="-mt-4">
            <nav className="bg-[#9372C3] h-13 rounded border border-white p-2">
              <button className="mt-1">
                <a
                  onClick={showHandler}
                  className="bg-[#4A2574] text-white px-2 py-2 rounded-md hover:bg-[#924DBF] font-mono shadow-md shadow-purple-400"
                  // href="/show"
                >
                  View Uploads
                </a>
              </button>
              <div className="flex items-end justify-end">
                <a onClick={logout} className="-mt-8 mr-4 text-xl">
                  <i class="ri-logout-box-r-line"></i>
                </a>
              </div>
            </nav>
          </div>
          <div className=" flex justify-center items-center ">
            <h2 className=" -mt-12 text-white text-2xl underline absolute z-1 font-bold font-mono hidden sm:inline">
              Upload Images
            </h2>
          </div>
          <form onSubmit={submitHandler}>
            <div className="flex items-center justify-center">
              <div class=" mt-25 w-[30rem]">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#924DBF] hover:bg-[#9E72C3] shadow-2xl shadow-[#4A2574]"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      class="w-8 h-8 mb-4 text-white "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p class="mb-2 font-mono text-xs sm:text-sm text-white ">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    class="hidden"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={fileChangeHandler}
                  />
                </label>
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <button
                type="submit"
                className="bg-[#4A2574] py-2 px-4 rounded-md text-white font-mono hover:bg-[#924DBF] "
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      )}
      <ToastContainer theme="dark" autoClose={1000} transition={Slide} />
    </>
  );
}

export default Upload;

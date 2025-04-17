import React from "react";

function Upload() {
  return (
    <>
      <div className="h-screen bg-[#7338A0] p-10 ">
        <div className="-mt-4">
          <nav className="bg-[#9372C3] h-13 rounded border border-white p-2">
            <button className="mt-1">
              <a
                className="bg-[#4A2574] text-white px-2 py-2 rounded-md hover:bg-[#924DBF] font-mono shadow-md shadow-purple-400"
                href="#"
              >
                View Uploads
              </a>
            </button>
            <div className="flex items-end justify-end">
              <a href="#" className="-mt-8 mr-4 text-xl">
                <i class="ri-logout-box-r-line"></i>
              </a>
            </div>
          </nav>
        </div>
        <div className=" flex justify-center items-center ">
          <h2 className=" -mt-12 text-white text-2xl underline absolute z-1 font-bold font-mono">
            Upload Images
          </h2>
        </div>
        <form action="#">
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
                  <p class="mb-2 font-mono text-sm text-white">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
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
    </>
  );
}

export default Upload;

import React from "react";

function Show() {
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
                Uploads
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
          <h2 className="-mt-12 text-white text-2xl underline absolute z-1 font-bold font-mono">
            Uploaded Images
          </h2>
        </div>
        <div className=""></div>
      </div>
    </>
  );
}

export default Show;

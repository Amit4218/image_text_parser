import React from "react";

function Show() {
  return (
    <>
      <div className="h-screen bg-[#7338A0] p-10 ">
        <div className="-mt-4">
          <nav className="bg-[#9372C3] h-13 rounded border border-white p-2">
            <button className="mt-1">
              <a
                className="bg-[#4A2574] text-white px-2 py-2 rounded-md hover:bg-[#924DBF] font-mono shadow-md shadow-purple-400 outline-none"
                href="#"
              >
                Uploads
              </a>
            </button>
            <button className="mt-1">
              <a
                className="bg-[#4A2574] text-white px-2 py-2 ml-2 rounded-md hover:bg-[#924DBF] font-mono shadow-md shadow-purple-400 outline-none"
                href="#"
              >
                Download CSV
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
            Uploaded Images Info
          </h2>
        </div>

        <div className=" overflow-hidden overflow-y-scroll h-[30rem] w-full mt-10 border border-white p-4 rounded-md ">
          <div className="border border-black p-2 rounded-md text-sm mt-2">
            <strong>
              <h1>Name: name</h1>
            </strong>
            <strong>Degsination: deg</strong>
            <br />
            <strong>Email: email</strong>
            <br />
            <strong>Company Name: cName</strong>
            <br />
            <strong>Address: address</strong>
            <br />
            <strong>Website: Website</strong>
            <br />
            <strong>Phone No: </strong>
          </div>
        </div>
      </div>
    </>
  );
}

export default Show;

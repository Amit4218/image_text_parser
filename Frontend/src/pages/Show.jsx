import React, { useEffect, useState } from "react";
import axios from "axios";
import { Slide, toast, ToastContainer } from "react-toastify";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import token from "../components/TokenCheck";

function Show() {
  token();

  const API_URL = import.meta.env.VITE_API_URI_LOCAL;

  const navigate = useNavigate();

  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);

  setTimeout(() => setloading(false), 800);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          return;
        }

        const res = await axios.get(`${API_URL}/upload/data/get-all`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 200) {
          setdata(res.data.data);
        }
      } catch (error) {
        toast.error("Error getting data!");
      }
    };

    fetchData();
  }, []);

  const uploadHandler = () => {
    setloading(true);
    setTimeout(() => navigate("/upload"), 500);
    setTimeout(() => setloading(false), 500);
  };

  function logout() {
    setloading(true);
    const token = localStorage.setItem("token", "");
    toast.success("logout successfully");
    setTimeout(() => navigate("/"), 900);
    setTimeout(() => setloading(false), 900);
  }

  const download = async () => {
    setloading(true);

    const API_URI = import.meta.env.VITE_API_URI_LOCAL;
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(`${API_URI}/upload/data/download`, {
        responseType: "blob",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "contacts.xlsx";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      toast.success("Download successful");
    } catch (error) {
      toast.error("Error downloading file");
      console.error("Download error:", error);
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="h-screen bg-[#7338A0] p-10">
          <div className="-mt-4">
            <nav className="bg-[#9372C3] h-13 rounded border border-white p-2">
              <button className="mt-1">
                <a
                  onClick={uploadHandler}
                  className="bg-[#4A2574] text-white px-2 py-2 rounded-md hover:bg-[#924DBF] font-mono shadow-md shadow-purple-400 outline-none"
                >
                  Uploads
                </a>
              </button>
              <button className="mt-1">
                <a
                  className="bg-[#4A2574] text-white px-2 py-2 ml-2 rounded-md hover:bg-[#924DBF] font-mono shadow-md shadow-purple-400 outline-none"
                  onClick={download}
                >
                  Download CSV
                </a>
              </button>
              <div className="flex items-end justify-end">
                <a onClick={logout} className="-mt-8 mr-4 text-xl">
                  <i className="ri-logout-box-r-line"></i>
                </a>
              </div>
            </nav>
          </div>

          <div className="flex justify-center items-center">
            <h2 className="-mt-12 text-white text-xl underline absolute z-1 font-bold font-mono hidden sm:inline">
              Uploaded Images Info
            </h2>
          </div>

          <div className="overflow-hidden overflow-y-scroll h-[32.5rem] w-full mt-10 border border-white p-4 rounded-md">
            {loading ? (
              <div className="text-white text-center font-mono">Loading...</div>
            ) : data.length > 0 ? (
              data.map((item, index) => (
                <div
                  key={index}
                  className="border border-black bg-[#924DBF] rounded-md p-3 mb-4 flex flex-col sm:flex-row sm:h-60 gap-4"
                >
                  <div className="flex-shrink-0 w-full sm:w-1/3 h-48 sm:h-full flex justify-center items-center">
                    <img
                      className="object-cover rounded-md border w-40 h-40 sm:w-full sm:h-full"
                      src={item.image}
                      alt={`${item.name}'s profile`}
                    />
                  </div>
                  <div className="text-white text-sm font-mono flex flex-col justify-center w-full sm:w-2/3">
                    <p>
                      <strong>Name:</strong> {item.name}
                    </p>
                    <p>
                      <strong>Designation:</strong> {item.designation}
                    </p>
                    <p>
                      <strong>Company Name:</strong> {item.companyName}
                    </p>
                    <p>
                      <strong>Email:</strong> {item.email}
                    </p>
                    <p>
                      <strong>Website:</strong> {item.website}
                    </p>
                    <p>
                      <strong>Address:</strong> {item.address}
                    </p>
                    <p>
                      <strong>Phone No:</strong>
                    </p>
                    <ul className="list-disc list-inside ml-4">
                      {item.phoneNumbers.map((phone, idx) => (
                        <li key={idx}>{phone}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-white text-center font-mono">
                No data available.
              </div>
            )}
          </div>
        </div>
      )}
      <ToastContainer theme="dark" autoClose={1000} transition={Slide} />
    </>
  );
}

export default Show;

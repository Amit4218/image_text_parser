import { toast } from "react-toastify";

const sendData = async (url, secureUrl) => {
  const API_URI = import.meta.env.VITE_API_URI_LOCAL;
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(
      `${API_URI}/upload/data/gemenai?url=${url}&secureUrl=${secureUrl}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    toast.success("Data sent successfully");
  } catch (error) {
    toast.error("Error sending data");
    // console.log("Error sending data", error);
  }
};

export default sendData;

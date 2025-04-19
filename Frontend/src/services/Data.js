import axios from "axios";

const sendData = async (url, secureUrl) => {
  const API_URI = import.meta.env.VITE_API_URI_LOCAL;

  try {
    const res = await axios.post(
      `${API_URI}/gemenai?url=${url}&secureUrl=${secureUrl}`
    );

    // console.log(res);

    console.log("Data sent successful");
  } catch (error) {
    console.log("Error sending data", error);
  }
};

export default sendData;

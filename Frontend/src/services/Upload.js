import { toast } from "react-toastify";
import sendData from "./Data";

const UploadImg = async (image) => {
  const CLOUDINARY_PRESET = import.meta.env.VITE_CLOUDINARY_PRESET;
  const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const CLOUDINARY_API_UPLOAD_URL = import.meta.env
    .VITE_CLOUDINARY_API_UPLOAD_URL;

  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", CLOUDINARY_PRESET);
  data.append("cloud name", CLOUDINARY_CLOUD_NAME);

  try {
    const res = await fetch(CLOUDINARY_API_UPLOAD_URL, {
      method: "POST",
      body: data,
    });

    const result = await res.json();
    const secure_url = result.secure_url;
    const url = result.url;
    // console.log(url);
    toast.success("Image Uploaded successfully");
    sendData(url, secure_url);
  } catch (err) {
    // console.error("Upload failed:", err);
    toast.error("Error uploading image");
  }
};

export default UploadImg;

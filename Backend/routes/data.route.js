import express from "express";
import parser from "../utils/gemini.util";

const router = express.Router();

router.post("/gemenai", async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ message: "Image URL is required" });
  }

  try {
    const data = await parser(url, process.env.GEMENAI_API_KEY);

    const info = await Card.create({
      user: user._id,
      name: data.Name,
      designation: data.Designation,
      companyName: data["Company Name"],
      address: data.Address,
      phoneNumbers: data["Phone Numbers"],
      email: data.Email,
      website: data.Website,
      image: url,
    });

    res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(500).json({
      message: "Internal serval error",
    });
  }
});

router.get("/get-all", async (req, res) => {
  try {
    const data = await Card.find();

    res.status(200).json({ message: "success", data: data });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
});

router.get("/download", async (req, res) => {
  try {
    const dataFromDB = await Card.find();
    // console.log("dataFromDB);

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Contacts");

    // Define headers (not keys from DB)
    worksheet.columns = [
      { header: "Name", key: "name" },
      { header: "Designation", key: "designation" },
      { header: "Company Name", key: "companyName" },
      { header: "Address", key: "address" },
      { header: "Phone Numbers", key: "phoneNumbers" },
      { header: "Email", key: "email" },
      { header: "Website", key: "website" },
    ];

    // Add rows using actual keys
    dataFromDB.forEach((entry) => {
      worksheet.addRow({
        name: entry.name,
        designation: entry.designation,
        companyName: entry.companyName,
        address: entry.address,
        phoneNumbers: Array.isArray(entry.phoneNumbers)
          ? entry.phoneNumbers.join(", ")
          : "",
        email: entry.email,
        website: entry.website,
      });
    });

    // Set response headers
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader("Content-Disposition", "attachment; filename=contacts.xlsx");

    // Write the workbook
    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    console.error("Error generating Excel file:", err);
    res
      .status(500)
      .send("Something went wrong while generating the Excel file.");
  }
});

export default router;

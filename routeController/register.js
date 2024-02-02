const mongoose = require("../models/register");
const ExcelJS = require("exceljs");
const registerModel = mongoose.model("register"); 

const register = async (req, res) => {
  try {
    const newEntry = new registerModel({
      leadName: req.body.leadName,
      members: req.body.members,
      teamName: req.body.teamName,
      email: req.body.email,
      phoneNo: req.body.phoneNo,
    });

    await newEntry.save();

    const entries = await registerModel.find();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Registrations");

    // Add headers to the Excel sheet
    worksheet.addRow([
      "Lead Name",
      "Members",
      "Team Name",
      "Email",
      "Phone Number",
    ]);
    //column size
    worksheet.getColumn(1).width = 20; 
    worksheet.getColumn(2).width = 15;
    worksheet.getColumn(3).width = 20;
    worksheet.getColumn(4).width = 30;
    worksheet.getColumn(5).width = 15;

    entries.forEach((entry) => {
      worksheet.addRow([
        entry.leadName,
        entry.members,
        entry.teamName,
        entry.email,
        entry.phoneNo,
      ]);

      worksheet.getColumn(1).width = 15; 
    });

    const excelFilePath = "ParticipantsList.xlsx";
    await workbook.xlsx.writeFile(excelFilePath);

    res.json("registered and data exported to Excel");
  } catch (err) {
    console.error("Error handling registration:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = register;

const empdata = require("../MOCK_DATA.json");
const fs = require("fs");

const GetAllemp = (req, res) => {
  // console.log("get...........................");
  //   res.end("<h1>get..............</h1>");
  res.status(200).json(empdata);
};

const GetByID = (req, res) => {
  const id = Number(req.params.id);
  const findemp = empdata.find((u) => u.id === id);
  // console.log(findemp);
  res.status(200).json(findemp);
};

const EmpSave = (req, res) => {
  const emp = req.body;
  empdata.push({ id: empdata.length + 1, ...emp });

  fs.writeFile("./MOCK_DATA.json", JSON.stringify(empdata), (err, data) => {
    return res
      .status(201)
      .json({ message: "data saved", status: empdata.length });
  });
};

const EmpUpdate = (req, res) => {
  const id = Number(req.params.id);
  const Empupdatedata = req.body;

  const updateIndex = empdata.findIndex((u) => u.id === id);
  console.log(updateIndex);

  if (updateIndex === -1) {
    return res.status(404).json({ message: "Employee not found" });
  }

  empdata[updateIndex] = { ...empdata[updateIndex], ...Empupdatedata };

  fs.writeFile("./MOCK_DATA.json", JSON.stringify(empdata), (err, data) => {
    return res.status(200).json({ message: "data updated" });
  });
};

const EmpDelete = (req, res) => {
  const id = Number(req.params.id);
  const Empdel = empdata.findIndex((u) => u.id === id);
  empdata.splice(Empdel, 1);
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(empdata, null, 2), (err) => {
    return res.status(200).json({ message: "Employee deleted successfully" });
  });
};

module.exports = { GetAllemp, GetByID, EmpSave, EmpUpdate, EmpDelete };

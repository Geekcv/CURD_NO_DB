const express = require("express");
const app = express();
const port = 4000;
const router = require("./routes/route.js");

app.use(express.json());

app.use("/api/GetAll", router);
app.use("/api/GetByID", router);
app.use("/api/EmpSave", router);
app.use("/api/EmpUpdate", router);
app.use("/api/EmpDelete", router);
app.use("/api", router);

app.listen(port, () => {
  console.log(`server runing at port ${port}`);
});

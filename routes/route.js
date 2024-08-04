const express = require("express");

const {
  GetAllemp,
  GetByID,
  EmpSave,
  EmpUpdate,
  EmpDelete,
} = require("../controller/empController");
const { Emplogin, EmpResister } = require("../Auth/Auth");
const authenticateToken = require("../Middleware/authenticateToken");

const router = express.Router();

router.get("/emp", authenticateToken, GetAllemp);

router.get("/:id", GetByID);

router.post("/emp", EmpSave);

router.put("/emp/:id", EmpUpdate);

router.delete("/emp/:id", EmpDelete);

// Register route
router.post("/register", EmpResister);

// Login route
router.post("/login", Emplogin);

module.exports = router;

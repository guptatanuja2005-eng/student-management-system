import express from "express";

import {
  getStudents,
  getStudent,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";

import { verifyToken } from "../middleware/auth.js";


const router = express.Router();

// ===========================
// Get All Students
// ===========================
router.get("/", verifyToken, getStudents);

// ===========================
// Get Student By ID
// ===========================
router.get("/:id", verifyToken, getStudent);

// ===========================
// Add Student
// ===========================
router.post(
  "/",
  verifyToken,
  addStudent
);

// ===========================
// Update Student
// ===========================
router.put(
  "/:id",
  verifyToken,
  updateStudent
);
// ===========================
// Delete Student
// ===========================
router.delete(
  "/:id",
  verifyToken,
  deleteStudent
);

export default router;
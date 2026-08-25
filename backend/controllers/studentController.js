import { db } from "../db/index.js";
import { students } from "../db/schema.js";
import {
    eq,
    ilike,
    and,
    desc,
    sql
} from "drizzle-orm";


// ==============================
// Get All Students
// ==============================

export const getStudents = async (req, res) => {
    try {

        const {
            search = "",
            department,
            page = 1,
            limit = 10
        } = req.query;

        const currentPage = Number(page);
        const pageLimit = Number(limit);

        const offset = (currentPage - 1) * pageLimit;

        const conditions = [];

        // Search by name
        if (search) {
            conditions.push(
                ilike(students.name, `%${search}%`)
            );
        }

        // Filter by department
        if (department) {
            conditions.push(
                eq(students.department, department)
            );
        }

        const data = await db
            .select()
            .from(students)
            .where(
                conditions.length
                    ? and(...conditions)
                    : undefined
            )
            .orderBy(desc(students.createdAt))
            .limit(pageLimit)
            .offset(offset);

        const total = await db
            .select({
                count: sql`count(*)`
            })
            .from(students)
            .where(
                conditions.length
                    ? and(...conditions)
                    : undefined
            );

        res.json({
            success: true,
            page: currentPage,
            limit: pageLimit,
            total: Number(total[0].count),
            data
        });

    } catch (error) {

        console.error("GET STUDENTS ERROR:", error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};


// ==============================
// Get Student By ID
// ==============================

export const getStudent = async (req, res) => {
    try {

        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid student ID"
            });
        }

        const student = await db
            .select()
            .from(students)
            .where(eq(students.id, id));

        if (student.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        res.status(200).json({
            success: true,
            data: student[0]
        });

    } catch (error) {

        console.error("GET STUDENT ERROR:", error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};


// ==============================
// Add Student
// ==============================

export const addStudent = async (req, res) => {
    try {

        const {
            name,
            email,
            department,
            phone,
            gender,
            status,
            address
        } = req.body;

        if (!name || !email || !department) {
            return res.status(400).json({
                success: false,
                message: "Name, email and department are required"
            });
        }

        // Check duplicate email
        const existingStudent = await db
            .select()
            .from(students)
            .where(eq(students.email, email));

        if (existingStudent.length > 0) {
            return res.status(400).json({
                success: false,
                message: "Email already exists"
            });
        }

        await db.insert(students).values({
            name,
            email,
            department,
            phone: phone || null,
            gender: gender || null,
            status: status || "Active",
            address: address || null,
        });

        res.status(201).json({
            success: true,
            message: "Student Added Successfully"
        });

    } catch (error) {

        console.error("ADD STUDENT ERROR:", error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};


// ==============================
// Update Student
// ==============================

export const updateStudent = async (req, res) => {
    try {

        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid student ID"
            });
        }

        const {
            name,
            email,
            department,
            phone,
            gender,
            status,
            address
        } = req.body;

        // Check whether student exists
        const existingStudent = await db
            .select()
            .from(students)
            .where(eq(students.id, id));

        if (existingStudent.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        // Check duplicate email
        if (email) {

            const duplicateEmail = await db
                .select()
                .from(students)
                .where(
                    and(
                        eq(students.email, email),
                        sql`${students.id} != ${id}`
                    )
                );

            if (duplicateEmail.length > 0) {
                return res.status(400).json({
                    success: false,
                    message: "Email already exists"
                });
            }
        }

        const updateData = {
            name,
            email,
            department,
            phone: phone || null,
            gender: gender || null,
            status: status || "Active",
            address: address || null
        };

        // Only update image if a new image was uploaded
        if (req.file) {
            updateData.image = req.file.filename;
        }

        await db
            .update(students)
            .set(updateData)
            .where(eq(students.id, id));

        res.status(200).json({
            success: true,
            message: "Student Updated Successfully"
        });

    } catch (error) {

        console.error("UPDATE STUDENT ERROR:", error);

        res.status(500).json({
            success: false,
            message: error.message || "Server Error"
        });
    }
};


// ==============================
// Delete Student
// ==============================

export const deleteStudent = async (req, res) => {
    try {

        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid student ID"
            });
        }

        // Check whether student exists
        const existingStudent = await db
            .select()
            .from(students)
            .where(eq(students.id, id));

        if (existingStudent.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        await db
            .delete(students)
            .where(eq(students.id, id));

        res.status(200).json({
            success: true,
            message: "Student Deleted Successfully"
        });

    } catch (error) {

        console.error("DELETE STUDENT ERROR:", error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};
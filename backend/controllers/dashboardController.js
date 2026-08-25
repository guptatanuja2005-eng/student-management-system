import { db } from "../db/index.js";
import { students } from "../db/schema.js";
import { sql } from "drizzle-orm";

export const getDashboardStats = async (req, res) => {
  try {

    const total = await db
      .select({ count: sql`count(*)` })
      .from(students);

    const active = await db
      .select({ count: sql`count(*)` })
      .from(students)
      .where(sql`status='Active'`);

    const inactive = await db
      .select({ count: sql`count(*)` })
      .from(students)
      .where(sql`status='Inactive'`);

    const departments = await db
      .select({
        count: sql`count(distinct department)`
      })
      .from(students);

    res.json({
      totalStudents: Number(total[0].count),
      activeStudents: Number(active[0].count),
      inactiveStudents: Number(inactive[0].count),
      departments: Number(departments[0].count)
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }
};
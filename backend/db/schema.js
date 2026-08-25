import {
  pgTable,
  serial,
  varchar,
  text,
  integer,
  timestamp
} from "drizzle-orm/pg-core";

// ==============================
// Users Table
// ==============================

export const users = pgTable("users", {
  id: serial("id").primaryKey(),

  name: varchar("name", { length: 100 }).notNull(),

  email: varchar("email", { length: 150 }).notNull().unique(),

  password: text("password").notNull(),

  role: varchar("role", { length: 20 }).default("admin"),

  createdAt: timestamp("created_at").defaultNow(),
});

// ==============================
// Students Table
// ==============================

export const students = pgTable("students", {
  id: serial("id").primaryKey(),

  name: varchar("name", { length: 120 }).notNull(),

  email: varchar("email", { length: 150 }).notNull().unique(),

  department: varchar("department", { length: 100 }).notNull(),

  phone: varchar("phone", { length: 20 }),

  gender: varchar("gender", { length: 20 }),

  status: varchar("status", { length: 20 }).default("Active"),

  address: text("address"),

  image: text("image"),

  age: integer("age"),

  createdAt: timestamp("created_at").defaultNow(),
});
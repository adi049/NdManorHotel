import { pgTable, serial, text, integer, date, timestamp } from "drizzle-orm/pg-core";
export const inquiries = pgTable("inquiries", {
 id: serial("id").primaryKey(), name: text("name").notNull(), phone: text("phone").notNull(), email: text("email"),
 checkIn: date("check_in").notNull(), checkOut: date("check_out").notNull(), adults: integer("adults").notNull().default(2),
 children: integer("children").notNull().default(0), rooms: integer("rooms").notNull().default(1), message: text("message"),
 status: text("status").notNull().default("new"), createdAt: timestamp("created_at").defaultNow().notNull(),
});

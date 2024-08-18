import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable("aiOutput", {
  id: serial("id").primaryKey(),
  formData: varchar("formData").notNull(),
  aiResponse: text("aiResponse").notNull(),
  templateSLug: varchar("templateSlug").notNull(),
  createBy: varchar("createBy").notNull(),
  createdAt: varchar("createdAt"),
});

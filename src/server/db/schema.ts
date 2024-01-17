// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { type InferInsertModel, type InferSelectModel, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { env } from "~/env";

const tName = (name: string) => `${env.NODE_ENV}_click-tap-t3_${name}`;

export const posts = sqliteTable(tName("posts"), {
  id: integer("id", {mode: "number"}).primaryKey({autoIncrement: true}),
  name: text("name").notNull(),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`)
})

export type SelectPost = InferSelectModel<typeof posts>;
export type InsertPost = InferInsertModel<typeof posts>;

export const rooms = sqliteTable(tName("rooms"), {
  id: integer("id", {mode: "number"}).primaryKey({autoIncrement: true}),
  code: text("code").unique().notNull(),
  completed: integer("completed", { mode: "boolean" }).notNull().default(false)
});

export type SelectRoom = InferSelectModel<typeof rooms>;
export type InsertRoom = InferInsertModel<typeof rooms>;

export const users = sqliteTable(tName("users"), {
  id: integer("id", {mode: "number"}).primaryKey({autoIncrement: true}),
  roomId: integer("room_id").references(() => rooms.id),
  clicks: integer("clicks", {mode: "number"}).notNull().default(0)
});

export type SelectUser = InferSelectModel<typeof users>;
export type InsertUser = InferInsertModel<typeof users>;

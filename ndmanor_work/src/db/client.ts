import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
const connectionString = process.env.DATABASE_URL;
if (!connectionString && process.env.NODE_ENV === "production") throw new Error("DATABASE_URL is required in production.");
const globalForDb = globalThis as unknown as { pool?: Pool };
export const pool = globalForDb.pool ?? new Pool(connectionString ? { connectionString, max: 5, idleTimeoutMillis: 30000, connectionTimeoutMillis: 10000 } : undefined);
if (process.env.NODE_ENV !== "production") globalForDb.pool = pool;
export const db = drizzle(pool);

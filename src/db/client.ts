import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
const connectionString = process.env.DATABASE_URL;
const globalForDb = globalThis as unknown as { pool?: Pool };
// Allow the website shell to build before deployment secrets are configured.
// Inquiry submissions still require DATABASE_URL and will return a handled server error without it.
export const pool = globalForDb.pool ?? new Pool(connectionString ? { connectionString, max: 5, idleTimeoutMillis: 30000, connectionTimeoutMillis: 10000 } : {});
if (process.env.NODE_ENV !== "production") globalForDb.pool = pool;
export const db = drizzle(pool);

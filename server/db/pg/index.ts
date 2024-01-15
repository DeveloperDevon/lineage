import { Client, Pool, PoolClient } from "pg";

export const pool = new Pool({
  host: "192.168.1.130",
  port: 5050,
  database: "kin",
  user: "devon",
  password: "Dr1nklocal",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

// export const pgClient = new Client({
//   host: "192.168.1.130",
//   port: 5050,
//   database: "kin",
//   user: "devon",
//   password: "Dr1nklocal",
// });

export * from './users'
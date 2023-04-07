import { DB } from "sqlite";

// open a database
export const db = new DB("app.db");

export type Bridge = {
  name: string;
  last_post_id: string | null;
};

// Create tables for bridges if they don't exist.
db.query(`/* SQL */
  CREATE TABLE IF NOT EXISTS bridge (
    name TEXT PRIMARY KEY NOT NULL,
    last_post_id TEXT NULL
  );
`);

export function upsertBridge(
  name: string,
  last_post_id: string | null,
) {
  return db.query(
    `/* SQL */
      INSERT OR REPLACE 
      INTO bridge (name, last_post_id) 
      VALUES (:name, :last_post_id)
      RETURNING *;`,
    { name, last_post_id },
  );
}

export function getLastPostId(name: string) {
  const response = db.query<[string]>(
    `/* SQL */
      SELECT last_post_id 
      FROM bridge 
      WHERE name = :name;`,
    { name },
  );
  if (response.length === 0) {
    return null;
  }

  const postId = response[0][0];

  if (postId === null) {
    return null;
  }

  return postId;
}

/** Import to test... */
// if (import.meta.main) {
//   upsertBridge("epiccc", null);
//   console.log(getLastPostId("fgadfsgdfa"));
// }

import { pool } from ".."

export const getMembers = async () => {
  const client = await pool.connect()
  try {
    const members = await client.query(`
      SELECT
        id,
        first_name as "firstName",
        last_name as "lastName",
        email,
        dob
      FROM members.info
    `)

    return ({ members: members.rows, membersCount: members.rowCount })
  } catch (error) {
    return ({ isError: true, error })
  } finally {
    client.release()
  }
}

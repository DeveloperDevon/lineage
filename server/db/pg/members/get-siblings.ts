import { pool } from ".."

export const getSiblings = async (id: number, fatherId: number, motherId: number) => {
  const client = await pool.connect()
  const text = `
      SELECT
        id,
        first_name as "firstName",
        last_name as "lastName",
        email,
        dob,
        gender
      FROM members.info
      WHERE id != $1 AND (father_id in ($2, $3) OR mother_id in ($2, $3));
  `
  const values = [id, fatherId, motherId]
  try {
    const response = await client.query({ text, values })
    const siblings = response?.rows

    return (siblings)
  } catch (error) {
    console.error(error)
    return ({ isError: true, error })
  } finally {
    client.release()
  }
}
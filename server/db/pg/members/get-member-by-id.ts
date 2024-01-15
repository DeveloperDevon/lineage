import { pool } from ".."

export const getMemberById = async (id: number) => {
  const client = await pool.connect()
  const text = `
      SELECT
        id,
        first_name as "firstName",
        last_name as "lastName",
        email,
        dob,
        gender,
        father_id as "fatherId",
        mother_id as "motherId",
        spouse_id as "spouseId"
      FROM members.info
      WHERE id = $1
  `
  const values = [id]
  try {
    const response = await client.query({ text, values })

    const member = response?.rows[0] ? response.rows[0] : undefined

    return (member)
  } catch (error) {
    return ({ isError: true, error })
  } finally {
    client.release()
  }
}
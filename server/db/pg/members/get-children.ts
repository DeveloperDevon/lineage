import { pool } from ".."

export const getChildren = async (id: number) => {
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
      WHERE father_id = $1 OR mother_id = $1;
  `
  const values = [id]
  try {
    const response = await client.query({ text, values })

    const children = response?.rows

    return (children)
  } catch (error) {
    console.error(error)
    return ({ isError: true, error })
  } finally {
    client.release()
  }
}
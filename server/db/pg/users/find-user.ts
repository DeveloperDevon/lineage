import { pool } from ".."

export const findUser = async (email: string) => {
  const client = await pool.connect()
  try {
    const text = 'SELECT * FROM users.info where email = $1'
    const values = [email]
    const userResponse = await client.query({ text, values })
    console.log({ user: JSON.stringify(userResponse.rows) })

    const userRow = userResponse.rows[0] ? userResponse.rows[0] : undefined
    if (!userRow) return { user: undefined, message: 'No user found' }

    const user = {
      id: userRow.id,
      firstName: userRow.first_name,
      lastName: userRow.last_name,
    }

    return { user, isError: false }
  } catch (error) {
    return { isError: true, error }
  } finally {
    client.release()
  }
}
import { pool } from ".."

type Member = {
  firstName: string
  lastName: string
  middleName?: string
  gender?: 'male' | 'female'
  email?: string
  dob?: Date
}

export const addNewMember = async (newMember: Member) => {
  try {
    const client = await pool.connect()
    const { firstName, middleName, lastName, gender, email, dob } = newMember
    const text = `
      INSERT INTO members.info (
        first_name,
        middle_name,
        last_name,
        gender,
        email,
        dob
        ) 
        VALUES ($1, $2, $3, $4, $5, $6)
    `

    const values = [firstName, middleName, lastName, gender, email, dob]
    const addMemberResponse = await client.query(text, values)

    return (addMemberResponse)
  } catch (error) {
    console.error(error)
    return ({ isError: true, error })
  }
}

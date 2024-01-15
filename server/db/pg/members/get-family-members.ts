import { pool } from ".."
import { getChildren } from "./get-children"
import { getMemberById } from "./get-member-by-id"
import { getSiblings } from "./get-siblings"

export const getFamilyMembers = async (id: number) => {
  const client = await pool.connect()
  try {
    const member = await getMemberById(id)
    const father = await getMemberById(member?.fatherId)
    const mother = await getMemberById(member?.motherId)
    const spouse = await getMemberById(member?.spouseId)
    const siblings = await getSiblings(id, member?.fatherId, member?.motherId)
    const children = await getChildren(id)

    return { father, mother, spouse, siblings, children }
  } catch (error) {
    console.error(error)
  } finally {
    client.release()
  }
}
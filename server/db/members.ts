import { db } from './index'

export const getMembers = async () => {
  try {
    const collection = await db.collection('members')
    const results = await collection.find({}).toArray()
    return results
  } catch (err) {
    console.error(err)
  }
}

export const addNewMember = async (member: any) => {
  try {
    const collection = await db.collection('members')
    const results = await collection.insertOne(member)
    return results
  } catch (err) {
    console.error(err)
    return { success: false, error: err }
  }
}

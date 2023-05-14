import { ObjectId } from 'mongodb'
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

interface setChildParentRelationshipProps {
  relationship: 'father' | 'mother',
  childId: string
  parentId: string
}
export const setChildParentRelationship = async ({ relationship, childId, parentId }: setChildParentRelationshipProps) => {
  // console.log({ childId, parentId })
  try {
    const field = relationship === 'mother' ? 'motherId' : 'fatherId'
    const query = { _id: new ObjectId(childId) }
    const updates = { $set: { [field]: parentId } }
    const collection = await db.collection('members')
    const results = await collection.updateOne(query, updates)
    console.log(results)
    return results
  } catch (err) {
    console.error(err)
  }
}

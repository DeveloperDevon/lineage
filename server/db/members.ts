import { ObjectId } from 'mongodb'
import { db } from './index'

export const getMembers = async () => {
  try {
    const collection = await db.collection('members')
    const results = await collection.find({}).sort({ firstName: 1 }).toArray()
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
    const members = await db.collection('members')
    const results = await members.updateOne(query, updates)
    console.log(results)
    return results
  } catch (err) {
    console.error(err)
  }
}

interface setSpouseRelationshipProps {
  memberId: string
  spouseId: string
}

export const setSpouseRelationship = async ({ memberId, spouseId }: setSpouseRelationshipProps) => {
  try {

    const members = await db.collection('members')

    const results = await members.bulkWrite([
      {
        updateOne: {
          filter: {
            _id: new ObjectId(memberId)
          },
          update: {
            $set: {
              spouseId: spouseId
            }
          }
        }
      },
      {
        updateOne: {
          filter: {
            _id: new ObjectId(spouseId)
          },
          update: {
            $set: {
              spouseId: memberId
            }
          }
        }
      }
    ])

    return results
  } catch (err) {
    console.error(err)
  }
}

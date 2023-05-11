import { MongoClient } from 'mongodb'

const client = new MongoClient('mongodb://localhost:27017')
let db: any

const dbInit = async () => {
  try {
    const connection = await client.connect()
    db = connection.db('lineage')
    console.log('connected to mongo db...')
  } catch (err) {
    console.error(err)
  }
}

export { dbInit, db }

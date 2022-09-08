import { MongoClient, ObjectId } from "mongodb"

let client

export const initClient = (uri) => {
  if (!client) {
    client = new MongoClient(uri)
  }
}

export const getAll = async () => {
  try {
    await client.connect()
    const db = client.db("recipes")
    const recipes = db.collection("recipes")

    const result = await recipes.find({}).toArray()

    return result

  } catch (e) {
    throw new Error(e)
  } finally {
    client.close()
  }
}

export const getOne = async (id) => {
  const objectId = new ObjectId(id)  

  try {
    await client.connect()
    const db = client.db("recipes")
    const recipes = db.collection("recipes")

    const result = await recipes.findOne({_id: objectId})

    return result

  } catch (e) {
    throw new Error(e)
  } finally {
    client.close()
  }    
}
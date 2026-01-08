import { MongoClient } from 'mongodb';

let client = null;
let db = null;

// MongoDB connection
export async function connectMongoDB() {
  try {
    const uri = process.env.MONGODB_URI;
    
    if (!uri) {
      console.warn('⚠️  MONGODB_URI not set. MongoDB features will be disabled.');
      return null;
    }

    if (client && db) {
      return db;
    }

    client = new MongoClient(uri);
    await client.connect();
    db = client.db(process.env.MONGODB_DB_NAME || 'incepta2026');
    
    console.log('✅ Connected to MongoDB');
    return db;
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    return null;
  }
}

// Get database instance
export async function getDB() {
  if (!db) {
    await connectMongoDB();
  }
  return db;
}

// Save registration to MongoDB
export async function saveRegistrationToMongoDB(registration) {
  try {
    const database = await getDB();
    if (!database) {
      console.warn('MongoDB not available, skipping database save');
      return null;
    }

    const collection = database.collection('registrations');
    const result = await collection.insertOne(registration);
    console.log(`✅ Registration saved to MongoDB: ${result.insertedId}`);
    return result;
  } catch (error) {
    console.error('❌ Error saving to MongoDB:', error);
    return null;
  }
}

// Update registration in MongoDB
export async function updateRegistrationInMongoDB(eventId, orderId, updates) {
  try {
    const database = await getDB();
    if (!database) {
      console.warn('MongoDB not available, skipping database update');
      return null;
    }

    const collection = database.collection('registrations');
    const result = await collection.updateOne(
      { eventId, orderId },
      { $set: { ...updates, updatedAt: new Date().toISOString() } }
    );
    
    if (result.matchedCount > 0) {
      console.log(`✅ Registration updated in MongoDB: ${orderId}`);
    }
    return result;
  } catch (error) {
    console.error('❌ Error updating MongoDB:', error);
    return null;
  }
}

// Get registration from MongoDB
export async function getRegistrationFromMongoDB(eventId, orderId) {
  try {
    const database = await getDB();
    if (!database) {
      return null;
    }

    const collection = database.collection('registrations');
    const registration = await collection.findOne({ eventId, orderId });
    return registration;
  } catch (error) {
    console.error('❌ Error getting from MongoDB:', error);
    return null;
  }
}

// Get all registrations for an event from MongoDB
export async function getRegistrationsFromMongoDB(eventId) {
  try {
    const database = await getDB();
    if (!database) {
      return [];
    }

    const collection = database.collection('registrations');
    const registrations = await collection.find({ eventId }).toArray();
    return registrations;
  } catch (error) {
    console.error('❌ Error getting registrations from MongoDB:', error);
    return [];
  }
}

// Close MongoDB connection
export async function closeMongoDB() {
  try {
    if (client) {
      await client.close();
      client = null;
      db = null;
      console.log('✅ MongoDB connection closed');
    }
  } catch (error) {
    console.error('❌ Error closing MongoDB connection:', error);
  }
}


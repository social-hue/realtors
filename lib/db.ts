import mongoose from "mongoose";

type MongooseGlobal = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

// Use a custom property on globalThis to persist connection in dev
declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseGlobal | undefined;
}

let cached: MongooseGlobal = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

async function dbConnect() {
  const MONGODB_URI = process.env.MONGODB_URI;
  
  console.log("MONGODB_URI exists?", !!MONGODB_URI); // Debug log
  
  if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable in .env.local");
  }

  if (cached.conn) return cached.conn;
  
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    }).then((mongoose) => mongoose);
  }
  
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
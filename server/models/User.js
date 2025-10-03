import mongoose from "mongoose";

const badgeSchema = new mongoose.Schema({}, { strict: false });

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: String,
  company: String,
  address: String,
  email: String,
  website: String,
  phone: String,
  logo: String,
  badges: { type: Map, of: String, default: {} },
  socials: {
    facebook: String,
    instagram: String,
    linkedin: String
  }
}, { timestamps: true });

export default mongoose.model("User", userSchema);

#!/usr/bin/env node
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌  Missing MONGODB_URI in .env.local");
  process.exit(1);
}

const AdminSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    name: { type: String, default: "Administrator" },
    role: { type: String, default: "admin" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Admin =
  mongoose.models.Admin || mongoose.model("Admin", AdminSchema, "admins");

function parseArgs() {
  return process.argv.slice(2).reduce((acc, arg) => {
    const [key, value] = arg.split("=");
    if (key && value) {
      acc[key.replace(/^--/, "")] = value;
    }
    return acc;
  }, {});
}

async function main() {
  const args = parseArgs();
  const email = args.email;
  const password = args.password;
  const name = args.name || "Administrator";

  if (!email || !password) {
    console.error("Usage: npm run seed:admin -- --email=user@example.com --password=Secret123 --name=\"Admin\"");
    process.exit(1);
  }

  await mongoose.connect(MONGODB_URI);

  const existing = await Admin.findOne({ email: email.toLowerCase() });
  if (existing) {
    console.error("❌  Admin already exists for this email.");
    process.exit(1);
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const admin = new Admin({
    email: email.toLowerCase(),
    password: hashedPassword,
    name,
  });

  await admin.save();
  console.log("✅  Admin created successfully:", {
    email: admin.email,
    name: admin.name,
    id: admin._id.toString(),
  });
  await mongoose.disconnect();
}

main().catch((error) => {
  console.error("❌  Failed to seed admin:", error);
  mongoose.disconnect().finally(() => process.exit(1));
});




import dotenv from "dotenv";
import { connectDB } from "../config/db.js";
import User from "../models/User.js";

dotenv.config();

const data = [
  {
    name: "Pramod",
    role: "Flutter Developer",
    company: "Wish Geeks Techserve Private Limited",
    address: "120A2 Iconic Tower Corenthum, Sector 62, Noida UP 201301, INDIA",
    email: "pramod@wishgeekstechserve.com",
    website: "https://www.wishgeekstechserve.com",
    phone: "+91 8009006231",
    logo: "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/wish.png",
    badges: {
      goodfirms:
        "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/firms.png",
      trustpilot:
        "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/trust.png",
      dmca: "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/dmca.png",
      clutch:
        "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/clutch.png",
    },
    socials: {
      facebook: "https://www.facebook.com/wishgeekstechserve/",
      instagram: "https://www.instagram.com/wishgeekstechserve/",
      linkedin: "https://www.linkedin.com/company/wishgeekstechserve/",
    },
  },
  {
    name: "Anjali Sharma",
    role: "UI/UX Designer",
    company: "Wish Geeks Techserve Private Limited",
    address: "120A2 Iconic Tower Corenthum, Sector 62, Noida UP 201301, INDIA",
    email: "anjali@wishgeekstechserve.com",
    website: "https://www.wishgeekstechserve.com",
    phone: "+91 9876543210",
    logo: "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/wish.png",
    badges: {
      goodfirms:
        "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/firms.png",
      trustpilot:
        "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/trust.png",
      dmca: "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/dmca.png",
      clutch:
        "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/clutch.png",
    },
    socials: {
      facebook: "https://www.facebook.com/wishgeekstechserve/",
      instagram: "https://www.instagram.com/wishgeekstechserve/",
      linkedin: "https://www.linkedin.com/company/wishgeekstechserve/",
    },
  },
  {
    name: "Ravi Kumar",
    role: "Project Manager",
    company: "Wish Geeks Techserve Private Limited",
    address: "120A2 Iconic Tower Corenthum, Sector 62, Noida UP 201301, INDIA",
    email: "ravi@wishgeekstechserve.com",
    website: "https://www.wishgeekstechserve.com",
    phone: "+91 9123456789",
    logo: "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/wish.png",
    badges: {
      goodfirms:
        "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/firms.png",
      trustpilot:
        "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/trust.png",
      dmca: "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/dmca.png",
      clutch:
        "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/clutch.png",
    },
    socials: {
      facebook: "https://www.facebook.com/wishgeekstechserve/",
      instagram: "https://www.instagram.com/wishgeekstechserve/",
      linkedin: "https://www.linkedin.com/company/wishgeekstechserve/",
    },
  },
  {
    name: "Ravi Kumar",
    role: "Project Manager",
    company: "Wish Geeks Techserve Private Limited",
    address: "120A2 Iconic Tower Corenthum, Sector 62, Noida UP 201301, INDIA",
    email: "ravi@wishgeekstechserve.com",
    website: "https://www.wishgeekstechserve.com",
    phone: "+91 9123456789",
    logo: "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/wish.png",
    badges: {
      goodfirms:
        "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/firms.png",
      trustpilot:
        "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/trust.png",
      dmca: "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/dmca.png",
      clutch:
        "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/clutch.png",
    },
    socials: {
      facebook: "https://www.facebook.com/wishgeekstechserve/",
      instagram: "https://www.instagram.com/wishgeekstechserve/",
      linkedin: "https://www.linkedin.com/company/wishgeekstechserve/",
    },
  },
  {
    name: "Neha Verma",
    role: "Business Analyst",
    company: "Wish Geeks Techserve Private Limited",
    address: "120A2 Iconic Tower Corenthum, Sector 62, Noida UP 201301, INDIA",
    email: "neha@wishgeekstechserve.com",
    website: "https://www.wishgeekstechserve.com",
    phone: "+91 7012345678",
    logo: "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/wish.png",
    badges: {
      goodfirms:
        "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/firms.png",
      trustpilot:
        "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/trust.png",
      dmca: "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/dmca.png",
      clutch:
        "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/clutch.png",
    },
    socials: {
      facebook: "https://www.facebook.com/wishgeekstechserve/",
      instagram: "https://www.instagram.com/wishgeekstechserve/",
      linkedin: "https://www.linkedin.com/company/wishgeekstechserve/",
    },
  },
  {
    name: "Arjun Mehta",
    role: "Backend Developer",
    company: "Wish Geeks Techserve Private Limited",
    address: "120A2 Iconic Tower Corenthum, Sector 62, Noida UP 201301, INDIA",
    email: "arjun@wishgeekstechserve.com",
    website: "https://www.wishgeekstechserve.com",
    phone: "+91 9812345670",
    logo: "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/wish.png",
    badges: {
      goodfirms:
        "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/firms.png",
      trustpilot:
        "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/trust.png",
      dmca: "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/dmca.png",
      clutch:
        "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/clutch.png",
    },
    socials: {
      facebook: "https://www.facebook.com/wishgeekstechserve/",
      instagram: "https://www.instagram.com/wishgeekstechserve/",
      linkedin: "https://www.linkedin.com/company/wishgeekstechserve/",
    },
  },
  {
    name: "Simran Kaur",
    role: "HR Manager",
    company: "Wish Geeks Techserve Private Limited",
    address: "120A2 Iconic Tower Corenthum, Sector 62, Noida UP 201301, INDIA",
    email: "simran@wishgeekstechserve.com",
    website: "https://www.wishgeekstechserve.com",
    phone: "+91 9911223344",
    logo: "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/wish.png",
    badges: {
      goodfirms:
        "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/firms.png",
      trustpilot:
        "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/trust.png",
      dmca: "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/dmca.png",
      clutch:
        "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/clutch.png",
    },
    socials: {
      facebook: "https://www.facebook.com/wishgeekstechserve/",
      instagram: "https://www.instagram.com/wishgeekstechserve/",
      linkedin: "https://www.linkedin.com/company/wishgeekstechserve/",
    },
  },
  {
    name: "Karan Gupta",
    role: "DevOps Engineer",
    company: "Wish Geeks Techserve Private Limited",
    address: "120A2 Iconic Tower Corenthum, Sector 62, Noida UP 201301, INDIA",
    email: "karan@wishgeekstechserve.com",
    website: "https://www.wishgeekstechserve.com",
    phone: "+91 9988776655",
    logo: "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/wish.png",
    badges: {
      goodfirms:
        "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/firms.png",
      trustpilot:
        "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/trust.png",
      dmca: "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/dmca.png",
      clutch:
        "https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/clutch.png",
    },
    socials: {
      facebook: "https://www.facebook.com/wishgeekstechserve/",
      instagram: "https://www.instagram.com/wishgeekstechserve/",
      linkedin: "https://www.linkedin.com/company/wishgeekstechserve/",
    },
  },
];

const seed = async () => {
  await connectDB(process.env.MONGO_URI);
  await User.deleteMany({});
  await User.insertMany(data);
  console.log("Seeded users");
  process.exit(0);
};

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});

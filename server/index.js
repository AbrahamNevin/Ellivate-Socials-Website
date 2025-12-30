import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY ? "LOADED" : "MISSING");

const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/contact", async (req, res) => {
  const { name, email, business, goal } = req.body;

  try {
    await resend.emails.send({
      from: "Ellivate Socials <leads@ellivatesocials.com>",
      to: ["elivate.socials@gmail.com"],
      subject: "New Strategy Call Lead 🚀",
      html: `
        <h2>New Lead</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Goal:</strong><br/>${goal}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});

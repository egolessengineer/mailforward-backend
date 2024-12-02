import express, { Request, Response } from "express";
import FormData from "form-data";
import Mailgun from "mailgun.js";
// import fs from "fs";
// import path from "path";
// import multer from "multer";
// import Audio from "../../models/audio";
// import Client from "../../models/profile/client";

const router = express.Router();

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({ username: "api", key: "f55d7446-b1c95f7f" });
router.post("/", async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, mail, message } = req.body;
    const emailData = {
      from: "brucehamada114@gmail.com",
      to: "bruce.han1996@gmail.com",
      subject: `New message from ${firstname} ${lastname}`,
      text: `You have received a new message from ${firstname} ${lastname} (${mail}):\n\n${message}`,
    };
    await mg.messages.create(
      "sandboxeb1d33950c514dcbb83e91a61b8dc7fe.mailgun.org",
      emailData
    );
    return res.status(200).send("Email sent successfully")
  } catch (err) {
    console.log("Error sending email", err);
    return res.status(500).send("Error sending email");
  }
});

module.exports = router;

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
const mg = mailgun.client({
  username: "api",
  key: "41c947a8a9afa3e113d3dce635e6b99d-f55d7446-c105db29",
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, mail, message } = req.body;
    console.log("Request:", {
      firstname: firstname,
      lastname: lastname,
      mail: mail,
      message: message,
    });
    mg.messages
      .create("sandboxeb1d33950c514dcbb83e91a61b8dc7fe.mailgun.org", {
        from: "Forwarded from mailgun <mailgun@sandboxeb1d33950c514dcbb83e91a61b8dc7fe.mailgun.org>",
        to: ["isabeljames004@gmail.com"],
        subject: `Message from ${firstname} ${lastname} - ${mail}`,
        text: `${message}`,
        html: `<p>${message}</p>`,
      })
      .then((msg) => {
        console.log(msg);
        return res.status(200).send("Email sent successfully");
      }) // logs response data
      .catch((err) => console.error(err)); // logs any error;
    // return res.status(200).send("Email sent successfully");
  } catch (err) {
    console.log("Error sending email", err);
    return res.status(500).send("Error sending email");
  }
});

module.exports = router;

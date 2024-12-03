import express from "express";
import cors from "cors";

// import dbConnect from "./lib/dbConnect.ts";
import bodyParser from "body-parser";
import "dotenv/config";

const expressApp = express();

expressApp.use(cors());
expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({ extended: true }));

export function launchApp() {
  // const botToken = process.env.BOT_TOKEN as string;
  // dbConnect();
  expressApp.listen(process.env.APP_PORT, () => {
    console.log(
      `🚀🚀 Server is running on http://localhost:${process.env.APP_PORT} 🚀🚀`
    );
  });

  expressApp.use(express.json());
  //define Routes
  expressApp.use("/api/v1/forward", require("./routes/forward.ts"));
}

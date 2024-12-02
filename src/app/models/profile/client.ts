import mongoose from "mongoose";
// import { StringDecoder } from "string_decoder";

const Schema = mongoose.Schema;
const Clientschema = new Schema({
  username: {
    type: String,
    required: true,
  },
  telegramID: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  endangered_level: {
    type: String,
  },
  region: {
    type: String,
  },
  points: {
    type: Number,
  },
  lingo_balance: {
    type: Number,
  },
  mainwallet_address: {
    type: String,
  },
  friends: [
    {
      id: {
        type: String,
      },
      name: {
        type: String,
      },
      reward: {
        type: Number,
      },
    },
  ],
  registered_date: {
    type: Date,
  },
  lastuploaded_date: {
    type: Date,
  },
  lastclamied_date: {
    type: Date,
  },
  tasks: {
    telegram: { type: Boolean },
    twitter: { type: Boolean },
  },
  daily_checkstatus: [
    {
      day: { type: String },
      date: { type: Date },
      available: { type: Boolean },
      checked: { type: Boolean },
      reward: { type: Number },
    },
  ],
});

// const DailyCheckStatusSchema = new Schema({
//   day: { type: String },
//   date: { type: Date },
//   checked: { type: Boolean },
// });

// export const DailyCheckStatus = mongoose.model("DailyCheckStatus", DailyCheckStatusSchema);

const Client = mongoose.model("client", Clientschema);
export default Client;

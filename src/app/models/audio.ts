import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Audioschema = new Schema({
  telegramID: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  audio: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Audio = mongoose.model("uploaded_audio", Audioschema);
export default Audio;

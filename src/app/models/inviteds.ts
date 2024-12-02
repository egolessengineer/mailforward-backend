import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Invitedschema = new Schema({
  telegramID: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  }
});

const Invited = mongoose.model("invited_data", Invitedschema);
export default Invited;

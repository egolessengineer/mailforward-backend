import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Premiumschema = new Schema({
  telegramID: {
    type:String,
    required:true
  },
  username: {
    type: String,
    required: true,
  },
  ispremium: {
    type: Boolean,
    required: true,
  },
});

const Premiumdata = mongoose.model("premiumdata", Premiumschema);
export default Premiumdata;

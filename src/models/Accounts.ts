import { Schema, model } from "mongoose";
const AccountSchema = new Schema(
  {
    username: { type: String, required: true },
    funds: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const Account = model("Account", AccountSchema);
export default Account;

import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  song: {
    type: String,
  },
  marker: String,
  age: Number,
  sujata:{
    esha:String,
    nazrul:String
  },
  hobbies:[String],
  createdAt: Date,
  updatedAt: Date,
});

const User = models.User || model("User", UserSchema);
export default User;

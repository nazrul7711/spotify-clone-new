import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
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
  hobbies:[Schema.Types.Mixed],
  lyrics:[String],
  volume:Number,
  target:Number,
  phone:Schema.Types.Mixed,

  createdAt: Date,
  updatedAt: Date,
});

const User = models.User || model("User", UserSchema);
export default User;

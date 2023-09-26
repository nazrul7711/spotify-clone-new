import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const UserSchema = new Schema({
  gender:{
    type:String,
    enum:["male","female"],
  },
  name:String,
  location: {
      street: String,
      city: String,
      state: String,
  },
  email:String,
  login:{
    username:String,
    password:String
  },
  phone:String,
  registered:{
    date:String,
    age:Number
  },

  createdAt: Date,
  updatedAt: Date,
});
UserSchema.index({ age: 1 }, { partialFilterExpression: { gender: "male" } });

const User = models.User || model("User", UserSchema);

export default User;

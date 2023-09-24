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
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  marker: Boolean,
  age: Number,
  hobbies: [Schema.Types.Mixed],
  createdAt: Date,
  updatedAt: Date,
});
UserSchema.index({ age: 1 }, { partialFilterExpression: { gender: "male" } });

const User = models.User || model("User", UserSchema);

export default User;

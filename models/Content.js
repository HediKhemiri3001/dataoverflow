import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  buttonlink: {
    type: String,
  },
});
export default mongoose.models.Content ||
  mongoose.model("Content", ContentSchema);

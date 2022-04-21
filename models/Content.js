import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  buttonlink: {
    type: String,
  },
});
export default mongoose.models.Content ||
  mongoose.model("Content", ContentSchema);

import mongoose from "mongoose";

const WorkshopSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  trainer: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
});
export default mongoose.models.Workshop ||
  mongoose.model("Workshop", WorkshopSchema);

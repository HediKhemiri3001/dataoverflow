import mongoose from "mongoose";
require("mongoose-type-url");
const VideoSchema = new mongoose.Schema({
  url: {
    type: String,
  },
  season: {
    type: Number,
  },
});
export default mongoose.models.Video || mongoose.model("Video", VideoSchema);

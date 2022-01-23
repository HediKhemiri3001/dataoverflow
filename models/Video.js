import mongoose from "mongoose";
require("mongoose-type-url");
const VideoSchema = new mongoose.Schema({
  url: {
    type: String,
  },
});
export default mongoose.models.Video || mongoose.model("Video", VideoSchema);

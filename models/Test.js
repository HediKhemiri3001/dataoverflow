import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
  testString: { type: String },
  testString2: { type: String },
});
export default mongoose.models.Test || mongoose.model("Test", TestSchema);

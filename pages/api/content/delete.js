import nextConnect from "next-connect";
import dbConnect from "../../../utils/mongo";
import Content from "../../../models/Content";
import { unlink } from "fs";
import getConfig from "next/config";
const path = require("path");
dbConnect();
const serverPath = (staticFilePath) => {
  return path.join(
    getConfig().serverRuntimeConfig.PROJECT_ROOT,
    staticFilePath
  );
};
const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.delete(async (req, res) => {
  try {
    const content = await Content.findOneAndDelete(req.body.content);
    unlink(serverPath("/public" + content.thumbnail), (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
    res.status(200).json(content);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default apiRoute;

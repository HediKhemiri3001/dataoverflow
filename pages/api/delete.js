import nextConnect from "next-connect";
import { promises } from "fs";
const path = require("path");
import getConfig from "next/config";

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

//joining path of directory
const serverPath = (staticFilePath) => {
  return path.join(
    getConfig().serverRuntimeConfig.PROJECT_ROOT,
    staticFilePath
  );
};
const directoryPath = serverPath("public/slider");
apiRoute.delete(async (req, res) => {
  try {
    const ImageUrl = req.body.image;
    await promises.unlink(path.join(directoryPath, ImageUrl));
    console.log("Deleted");
    res.status(200).json({ data: "success" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
export default apiRoute;

import nextConnect from "next-connect";
import multer from "multer";
import { promises } from "fs";
const path = require("path");
import getConfig from "next/config";
const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/slider",
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

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

apiRoute.use(upload.array("theFiles"));

apiRoute.post((req, res) => {
  res.status(200).json({ data: "success" });
});
//joining path of directory
const serverPath = (staticFilePath) => {
  return path.join(
    getConfig().serverRuntimeConfig.PROJECT_ROOT,
    staticFilePath
  );
};
const directoryPath = serverPath("public/slider");
apiRoute.get(async (req, res) => {
  try {
    const files = await promises.readdir(directoryPath);
    res.status(200).json(files);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

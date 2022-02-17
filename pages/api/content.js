//content data to be returned on get is supposed to be structured like this :
//many content objects with these fields :
//{contentName: name, contentDescripition: desc, contentThumbnail: pathToImageOnDisk, buttonlink: path to page if content element has a redirecting button else
//null}
//these will maybe be in json file also on Disk or in a database .
import nextConnect from "next-connect";
import dbConnect from "../../utils/mongo";
import Content from "../../models/Content";
import multer from "multer";
import { promises } from "fs";
dbConnect();
const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/contentThumbnails",
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
const directoryPath = serverPath("public/contentThumbnails");
apiRoute.get(async (req, res) => {
  try {
    const content = await Content.find({});
    res.status(200).json(content);
  } catch (err) {
    res.status(500).json(err);
  }
});
apiRoute.delete(async (req, res) => {
  try {
    const content = await Content.findOneAndDelete(req.body.content);
    res.status(200).json(content);
  } catch (err) {
    res.status(500).json(err);
  }
});
apiRoute.use(upload.single("thumbnail"));
const serverPath = (staticFilePath) => {
  return path.join(
    getConfig().serverRuntimeConfig.PROJECT_ROOT,
    staticFilePath
  );
};
apiRoute.post((req, res) => {
  try {
    const name = req.body.name;
    const description = req.body.description;
    const thumbnail = serverPath(
      "/public/contentThumbnails" + req.body.thumbnail
    );
    const buttonlink = req.body.buttonlink;
    await schema.validate({
      name,
      description,
      thumbnail,
      buttonlink,
    });

    const content = await Content.create({
      name: name,
      description: description,
      thumbnail: thumbnail,
      buttonlink: buttonlink,
    });
    res.status(201).json(content);
  } catch (err) {
    res.status(500).json(err);
  }
});

const directoryPath = serverPath("public/contentThumbnails");

export default apiRoute;

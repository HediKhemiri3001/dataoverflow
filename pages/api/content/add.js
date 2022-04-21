//content data to be returned on get is supposed to be structured like this :
//many content objects with these fields :
//{contentName: name, contentDescripition: desc, contentThumbnail: pathToImageOnDisk, buttonlink: path to page if content element has a redirecting button else
//null}
//these will maybe be in json file also on Disk or in a database .
import nextConnect from "next-connect";
import dbConnect from "../../../utils/mongo";
import Content from "../../../models/Content";

import formidable from "formidable";
//TODO: Make it so writing to file system is only done when writing to database is succesful
dbConnect();
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

apiRoute.post(async (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = "./public/contentThumbnails";
  form.keepExtensions = true;
  form.parse(req, async (err, fields, files) => {
    try {
      const content = await Content.create({
        name: fields.name,
        description: fields.description,
        thumbnail:
          "/contentThumbnails/" +
          files["thumbnail"].newFilename +
          "." +
          files["thumbnail"].mimetype.substring(6),
        buttonlink: fields.buttonlink,
      }).catch((err) => {
        res.status(500).json(err);
      });
      res.status(201).json(content);
    } catch (eror) {
      res.status(500).json(eror);
    }
  });
  form.on("fileBegin", function (name, file) {
    //rename the incoming file to the file's name
    file.filepath =
      form.uploadDir +
      "/" +
      file.newFilename +
      "." +
      file.mimetype.substring(6);
  });
});

export const config = {
  api: {
    bodyParser: false,
  },
};
export default apiRoute;

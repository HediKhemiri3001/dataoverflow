//content data to be returned on get is supposed to be structured like this :
//many content objects with these fields :
//{contentName: name, contentDescripition: desc, contentThumbnail: pathToImageOnDisk, buttonlink: path to page if content element has a redirecting button else
//null}
//these will maybe be in json file also on Disk or in a database .
import nextConnect from "next-connect";
import dbConnect from "../../utils/mongo";
import Content from "../../models/Content";
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
apiRoute.get(async (req, res) => {
  try {
    const content = await Content.find({});
    res.status(200).json(content);
  } catch (err) {
    res.status(500).json(err);
  }
});
export default apiRoute;

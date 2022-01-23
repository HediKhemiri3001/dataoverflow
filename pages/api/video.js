import nextConnect from "next-connect";
import dbConnect from "../../utils/mongo";
import Video from "../../models/Video";
import * as yup from "yup";
let schema = yup.object().shape({
  url: yup.string().trim().url().required(),
});
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
  try {
    const url = req.body.url;
    await schema.validate({
      url,
    });
    let ToBeInsertedUrl = new URL(url);
    ToBeInsertedUrl = ToBeInsertedUrl.search.split("&")[0];
    ToBeInsertedUrl = ToBeInsertedUrl.replace("?v=", "");
    console.log(ToBeInsertedUrl);
    const video = await Video.create({
      url: ToBeInsertedUrl,
    });
    res.status(201).json(video);
  } catch (err) {
    res.status(500).json(err);
  }
});
apiRoute.get(async (req, res) => {
  try {
    const video = await Video.find();
    res.status(200).json(video);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default apiRoute;

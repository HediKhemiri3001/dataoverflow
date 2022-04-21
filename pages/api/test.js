import nextConnect from "next-connect";
import dbConnect from "../../utils/mongo";
import Test from "../../models/Test";
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
  const test = await Test.find({});
  res.status(200).json(test);
});
apiRoute.post(async (req, res) => {
  try {
    const testString = req.body.test;
    const testString2 = req.body.test2;
    const test = await Test.create({
      testString: testString,
      testString2: testString2,
    });
    res.status(200).json(test);
  } catch (err) {
    res.status(500).json(err);
  }
});
export default apiRoute;

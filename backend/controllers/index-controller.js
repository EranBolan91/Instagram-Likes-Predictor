
const fetchData = (req, res, next) => {
  console.log(req.body);
    res.json({ success: "YAYYYYAYYY" });
  };

exports.fetchData = fetchData;
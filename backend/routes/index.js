import express from "express";
var router = express.Router();

/* GET home page. */
// router.use(cors());
// router.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

export default router;

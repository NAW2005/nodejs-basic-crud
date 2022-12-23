const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({ msg: "all post" });
});

// router.get("/:id", (req, res) => {
//   res.json({ msg: "posts router id is " + req.params.id });
// });

router
  .route("/:id")
  .get((req, res) => res.json({ msg: "all post route is here and id is " + req.params.id }))
  .patch((req, res) => res.json({ msg: "this is path" }))
  .delete((req, res) => res.json({ msg: "do you relly want to delete" }));

module.exports = router;

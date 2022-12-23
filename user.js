const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "user su" });
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  res.json({ msg: `your id is ${id}` });
}); 
router.post("/",(req,res) => {
    res.json(req.body)
})
module.exports = router;

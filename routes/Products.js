var express = require("express");
var router = express.Router();
var con = require("../config/db");

router.get("/", (req, res) => {
  con.query("select * from products", (err, data) => {
    if (err) {
      res.status(500).send({ data: "ERROR!" });
    }
    console.log("data from db: ", data);
    res.status(200).send({ data: data });
  });
});

module.exports = router;

var express = require("express");
var router = express.Router();
var con = require("../config/db");

router.get("/", (req, res) => {
  con.query("select * from products", (err, data) => {
    if (err) {
      res.send({ data: "ERROR!" });
    }
    console.log("data from db: ", data);
    res.send({ data: data });
  });
});

module.exports = router;

var express = require("express");
var router = express.Router();
var con = require("../config/db");

router.get("/", (req, res) => {
  con.query("select * from users", (err, data) => {
    if (err) {
      res.send({ data: "ERROR!" });
    }
    res.send({ data: data });
  });
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  if (!id) {
    res.send({ err: "id not found!" });
  }
  con.query(`select * from users where id=${id}`, (err, data) => {
    if (err) {
      res.send({ err: "Err in db!" });
    }
    res.send({ data: data });
  });
});

router.post("/", (req, res) => {
  let newUserData = req.body;
  if (!newUserData || !newUserData.name) {
    res.send({ err: "Data invalid" });
  }
  let query = `insert into users (name) values ('${newUserData.name}')`;
  con.query(query, (err, data) => {
    if (err) {
      res.send({ err: "Err with db" });
    }
    res.send({ message: "successfully inserted!" });
  });
});

router.put("/:id", (req, res) => {
  let id = req.params.id;
  let newData = req.body;
  if (!id) {
    res.send({ err: "id not found" });
  }
  let query = `update users set name='${newData.name}' where id=${id}`;
  con.query(query, (err, data) => {
    if (err) {
      res.send({ err: "Err with db" });
    }
    res.send({ message: "updated!" });
  });
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  if (!id) {
    res.send({ err: "id not found" });
  }
  let query = `delete from users where id=${id}`;
  con.query(query, (err, data) => {
    if (err) {
      res.send({ err: "Err with db" });
    }
    res.send({ message: "deleted!" });
  });
});

module.exports = router;

var express = require("express");
var router = express.Router();
var con = require("../config/db");

router.get("/", (req, res) => {
  con.query("select * from users", (err, data) => {
    if (err) {
      res.status(500).send({ data: "ERROR!" });
    }
    res.status(200).send({ data: data });
  });
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  if (!id) {
    res.status(500).send({ err: "id not found!" });
  }
  con.query(`select * from users where id=${id}`, (err, data) => {
    if (err) {
      res.status(500).send({ err: "Err in db!" });
    }
    res.status(200).send({ data: data });
  });
});

router.post("/", (req, res) => {
  let newUserData = req.body;
  if (!newUserData || !newUserData.name) {
    res.status(500).send({ err: "Data invalid" });
  }
  let query = `insert into users (name) values ('${newUserData.name}')`;
  con.query(query, (err, data) => {
    if (err) {
      res.status(500).send({ err: "Err with db" });
    }
    res.status(200).send({ message: "successfully inserted!" });
  });
});

router.put("/:id", (req, res) => {
  let id = req.params.id;
  let newData = req.body;
  if (!id) {
    res.status(500).send({ err: "id not found" });
  }
  let query = `update users set name='${newData.name}' where id=${id}`;
  con.query(query, (err, data) => {
    if (err) {
      res.status(500).send({ err: "Err with db" });
    }
    res.status(200).send({ message: "updated!" });
  });
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  if (!id) {
    res.status(500).send({ err: "id not found" });
  }
  let query = `delete from users where id=${id}`;
  con.query(query, (err, data) => {
    if (err) {
      res.status(500).send({ err: "Err with db" });
    }
    res.status(200).send({ message: "deleted!" });
  });
});

module.exports = router;

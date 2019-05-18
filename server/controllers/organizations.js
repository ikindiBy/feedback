const router = require('express').Router();
const db = require('../db/db');

const Organization = {
  getOrgsList: function (req, res) {
    try {
      db.many("SELECT * FROM public.orgs")
        .then(function (data) {
          res.send(data);
        })
        .catch(function (error) {
          console.log("ERROR:", error);
          res.status(500).send(error)
        });
    } catch (e) {
      console.log(e);
    }
  }
};

router.get('/organization/list', Organization.getOrgsList);

module.exports = router;
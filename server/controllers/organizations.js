const router = require("express").Router();
const db = require("../db/db");

const Organization = {
  getOrgsList: function(req, res) {
    try {
      db.many("SELECT * FROM public.orgs")
        .then(function(data) {
          res.send(data);
        })
        .catch(function(error) {
          console.log("ERROR:", error);
          res.status(500).send(error);
        });
    } catch (e) {
      console.log(e);
    }
  },
  getOrgsListByCoordinates: function(req, res) {
    const params = req.body;
    console.log(req);
    if (params["location"] && params["distance"]) {
      const location = params["location"],
        distance = params["distance"];

      try {
        db.many(
          "SELECT id, name, addr as address, (6371 * acos( cos( radians($1) ) * cos( radians( CAST (coordx AS FLOAT) ) ) * " +
            "cos( radians( CAST (coordy AS FLOAT) ) - radians($2) ) + sin( radians($1) ) * " +
            "sin( radians( CAST (coordx AS FLOAT) ) ) ) ) as dist FROM public.orgs",
          [location["latitude"], location["longitude"]]
        )
          .then(function(data) {
            const filteredByDistance = data.filter(function(org) {
              return org["dist"] <= distance;
            });

            res.send(filteredByDistance);
          })
          .catch(function(error) {
            res.status(500).send(error.message);
          });
      } catch (e) {
        res.status(500).send(error.message);
      }
    } else {
      res.status(400).send({ error: "Bad params" });
    }
  }
};

router.get("/organization/list", Organization.getOrgsList);
router.post(
  "/organization/search/coordinates",
  Organization.getOrgsListByCoordinates
);

module.exports = router;

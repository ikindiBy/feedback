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
    let params = req.body;

    if (params["location"] && params["distance"]) {
      const location = params["location"],
        distance = params["distance"];

      try {
        db.many(
          "SELECT id, unn, name, addr as address, (6371 * acos( cos( radians($1) ) * cos( radians( CAST (coordx AS FLOAT) ) ) * " +
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
        res.status(500).send(e.message);
      }
    } else {
      res.status(400).send({ error: "Bad params" });
    }
  },
  getOrganizationById: function (req, res) {
    let params = req.body;

    if (params["org"]) {
      const org = params["org"];

      try {
        db.many(
          "select o.id, o.name, o.unn, o.addr, o.coordx, o.coordy, " +
          "to_char(AVG (fb.\"overalEstimation\"),'9D99') AS avg_overalest, " +
          "to_char(AVG (fb.\"difficultingProc\"),'9D99') AS avg_diffproc, " +
          "to_char(AVG (fb.speed),'9D99') AS avg_speed, " +
          "to_char(AVG (fb.polite),'9D99') AS avg_polite " +
          "from public.orgs as o " +
          "inner join public.feedback as fb on fb.org_id = o.id where o.id = $1 GROUP BY o.id", org)
          .then(function(data) {
              if (data.length) {
                try {
                  db.any("select fb.user_id, usr.username as logged_user, fb.user_name as quick_fb_username, email, " +
                    "fb.comment, array[fb.\"overalEstimation\", fb.\"difficultingProc\", " +
                    "fb.speed, fb.polite] as rates, fb.\"hasRecommended\", " +
                    "fb.date, fb.\"hasResponse\", rfb.response, rfb.date as response_date  from public.feedback as fb " +
                    "left join public.response_on_feedback as rfb on rfb.feedback_id = fb.id " +
                    "left join public.users as usr on usr.id = fb.user_id where fb.org_id = $1", org)
                    .then(function (feedbacks) {
                          const result = Object.assign({}, data[0], {feedbacks: feedbacks});
                          res.send(result);
                    })
                    .catch(function (error) {
                          res.status(500).send(error.message)
                    });
                } catch (e) {
                  res.status(500).send(e.message);
                }
              } else {
              }
          })
          .catch(function(error) {
            res.status(500).send(error.message);
          });
      } catch (e) {
        res.status(500).send(e.message);
      }
    } else {
      res.status(400).send({ error: "Bad params" });
    }
  }
};

router.get("/organization/list", Organization.getOrgsList);
router.post("/organization/search/coordinates", Organization.getOrgsListByCoordinates);
router.post("/organization/read/", Organization.getOrganizationById);

module.exports = router;

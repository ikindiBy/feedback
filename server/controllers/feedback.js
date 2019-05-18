const router = require('express').Router();
const db = require('../db/db');

const Feedback = {
  getOrgFeedbackListByOrg: function (req, res) {
    const params =req.body;

    if (params['org']) {
    const orgId = params['org'];
      try {
        db.any("select fb.user_id, usr.username, fb.comment, fb.date, fb.\"hasResponse\", rfb.response  from public.feedback as fb " +
          "left join public.response_on_feedback as rfb on rfb.feedback_id = fb.id " +
          "left join public.users as usr on usr.id = fb.user_id where fb.org_id = $1", orgId)
          .then(function (data) {
            res.send(data);
          })
          .catch(function (error) {
            res.status(500).send(error.message)
          });
      } catch (e) {
        res.status(500).send(error.message)
      }
    } else {
      res.status(400).send({error: 'Bad params'});
    }
  }
};

router.post('/feedback/list', Feedback.getOrgFeedbackListByOrg);

module.exports = router;
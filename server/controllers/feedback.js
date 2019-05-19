const router = require('express').Router();
const db = require('../db/db');

const Feedback = {
  addNewFeedbackOnOrgByUser: function (req, res) {
    const params = req.body;

    if (params['org'] && params['user'] && params['rate_1'] && params['rate_2'] && params['rate_3'] && params['rate_4']) {
      try {
        db.any("INSERT INTO public.feedback (user_id, org_id, comment, quest_1, quest_2, quest_3, quest_4) " +
          "VALUES ($1, $2, $3, $4, $5, $6, $7)",
            [params['user'], params['org'], params['comment'], params['rate_1'], params['rate_2'], params['rate_3'], params['rate_4']])
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
  },
  addNewResponseOnFeedback: function (req, res) {
    const params = req.body;

    if (params['user'] && params['response'] && params['feedback_id']) {
      try {
        db.any("INSERT INTO public.response_on_feedback (user_id, response, feedback_id) " +
          "VALUES ($1, $2, $3)",
          [params['user'], params['response'], params['feedback_id']])
          .then(function (data) {
            db.any("UPDATE public.feedback set \"hasResponse\" = true where id = $1", params['feedback_id'])
              .then(function (data) {
                res.send(data);
            })
              .catch(function (error) {
              res.status(500).send(error.message)
            });
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
  },
  getOrgFeedbackListByOrg: function (req, res) {
    const params = req.body;

    if (params['org']) {
    const orgId = params['org'];
      try {
        db.any("select fb.user_id, usr.username, fb.comment, array[fb.quest_1, fb.quest_2, fb.quest_3, fb.quest_4] as rates, " +
          "fb.date, fb.\"hasResponse\", rfb.response  from public.feedback as fb " +
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
router.post('/feedback/new', Feedback.addNewFeedbackOnOrgByUser);
router.post('/feedback/response', Feedback.addNewResponseOnFeedback);

module.exports = router;
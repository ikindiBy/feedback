const router = require('express').Router();
const db = require('../db/db');

const Auth = {
  login: function (req, res) {
    const params = req.body;

    if (params['login'] && params['password']) {
    const login = params['login'],
      password = params['password'];

      try {
        db.one("SELECT u.id as userId, u.username, r.code as roleCode, o.id, o.name, o.addr FROM public.users as u " +
          "left join public.orgs as o on o.id = org_id " +
          "left join public.role as r on r.id = role where login = $1 and password = $2", [login, password])
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

router.post('/auth/login', Auth.login);

module.exports = router;
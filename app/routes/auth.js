const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get(`/google`,
passport.authenticate('google', { scope: [`https://www.googleapis.com/auth/userinfo.email`] }));

router.get(`/google/callback`, 
passport.authenticate(`google`, { failureRedirect: '/login' }),
function(req, res) {
  req.session.save(err => { 
      if (err){ res.status(500).send(err) 
      res.redirect('/logout')} 
      else {
          res.redirect(process.env.CLIENT_ORIGIN)
      }
    })
})

router.get(`/logout`, async (req,res) => {
    req.session.destroy()
    req.logout()
    res.redirect(process.env.CLIENT_ORIGIN)
  })

module.exports = router
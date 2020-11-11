module.exports = function (app) {
  app.get('/', function (req, res) {
    res.redirect('/posts')
  })
  app.use('/signup', require('./signup'))
  app.use('/signin', require('./signin'))
  app.use('/signout', require('./signout'))
  app.use('/posts', require('./posts'))
  app.use('/comments', require('./comments'))
  app.use(function (req, res, next) {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
  })
  app.use(function(err,req, res,next) {
    res.status(404).render('404')
  })
}
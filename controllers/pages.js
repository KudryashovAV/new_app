exports.index = function (req, res) {
  res.render('pages/index', {
    title: 'Home page',
    message: 'This is the "index" action of "pages" controller'
  })
}

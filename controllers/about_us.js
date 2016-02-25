exports.index = function (req, res) {
  res.render('about_us/index', {
    title: 'about page',
    message: 'This is the "index" action of "about_us" controller'
  })
}

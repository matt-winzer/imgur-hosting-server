function imageTest(req, res, next) {
  return res.json({ message: 'Images running!' })
}

module.exports = {
  imageTest
}
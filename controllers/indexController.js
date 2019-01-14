function serverTest(req, res, next) {
  return res.json({ message: 'Server running!' })
}

module.exports = {
  serverTest
}
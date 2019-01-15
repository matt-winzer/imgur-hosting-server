function imageTest(req, res, next) {
  return res.json({ message: 'Images running!' })
}

function uploadTest(req, res, next) {
  const files = req.files
  console.log('files', files)
  console.log('body', req.body.image)
  return res.json({ message: 'Images running!' })
}

module.exports = {
  imageTest,
  uploadTest
}
const express = require('express')

const router = express.Router()
const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    /*
      Files will be saved in the 'uploads' directory. Make
      sure this directory already exists!
    */
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    /*
      uuidv4() will generate a random ID that we'll use for the
      new filename. We use path.extname() to get
      the extension from the original file name and add that to the new
      generated ID. These combined will create the file name used
      to save the file on the server and will be available as
      req.file.pathname in the router handler.
    */
    // const newFilename = `${uuidv4()}${path.extname(file.originalname)}`
    cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  },
})
// create the multer instance that will be used to upload/save the file
const upload = multer({
  storage: storage,
}).single('fileUpload')

router.post('/api/profile/photo', (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      console.log('errror message')
    }
    res.json({
      success: true,
      message: 'Image uploaded',
    })
  })
})

module.exports = router

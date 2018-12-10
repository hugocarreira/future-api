const app = module.exports = require('express')()
const multer = require('multer')
const router = express.Router()

const multerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './static/');
    },
    filename : function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: multerStorage })

app.post('/file/upload', upload.any(), (req, res) => {
    console.log()
    res.send({ 'data': req.files })
})
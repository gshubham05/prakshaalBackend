import multer from "multer";

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${process.cwd()}/uploads`);
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null,file.originalname)
  },
});

let upload = multer({ storage });

export default upload
import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.fieldname === "image") {
      // Validate image file type and dimensions
      if (file.mimetype && !file.mimetype.startsWith("image/")) {
        return cb(
          new Error("Invalid image file type. Only images are allowed.")
        );
      }
    } else if (file.fieldname === "file") {
      // Validate file type (txt, doc, docx, pdf)
      const allowedFileTypes = [
        "text/plain",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/pdf",
      ];
      if (file.mimetype && !allowedFileTypes.includes(file.mimetype)) {
        return cb(
          new Error(
            "Invalid file type. Only txt, doc, docx, and pdf files are allowed."
          )
        );
      }
    }

    cb(null, true);
  },
});

const imageFileUploadMiddleware = upload.fields([
  { name: "image", maxCount: 1 },
  { name: "file", maxCount: 1 },
]);

export default imageFileUploadMiddleware;

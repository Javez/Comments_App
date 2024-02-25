import sharp from "sharp";
import path from "path";
import { error } from "console";
import commentService from "../service/comment.service.js";

class CommentController {
  static async addComment(req, res) {
    const { image, file } = req.files;

    try {
      let imagePath;
      // Process and validate image dimensions using sharp if image is uploaded as a file
      if (image && image[0]) {
        const imageBuffer = await sharp(image[0].buffer)
          .resize({ width: 320, height: 240 })
          .toBuffer();
        imagePath = `uploads/${Date.now()}_comment_image.jpg`;
        await sharp(imageBuffer).toFile(imagePath);
      } else if (imageUrl) {
        // Save directly if image is provided as a URL
        imagePath = imageUrl;
      }

      let filePath;
      // Validate and save file path if provided
      if (file && file[0]) {
        filePath = `uploads/${Date.now()}_comment_file.${path.extname(
          file[0].originalname
        )}`;
        await sharp(file[0].buffer).toFile(filePath);
      }

      const data = {
        userId: req.body.userId,
        text: req.body.text,
        image: image,
        file: file,
      };
      const comment = await commentService.addComment(data);
      res.status(201).json(comment);
    } catch {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  }
  static async addSubComment(req, res) {
    try {
      const data = {
        parentCommentId: req.body.parentCommentId,
        text: req.body.text,
        image: req.body.image,
        file: req.body.file,
      };
      const comment = await commentService.addSubComment(data);
      res.status(201).json(comment);
    } catch {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  }
  static async getCommentById(req, res) {
    try {
      const data = {
        id: req.body.id,
      };
      res.send(await commentService.getCommentById(data));
    } catch {
      console.log(error);
    }
  }
  static async getAllComments() {
    try {
      res.send(await commentService.getAllComments());
    } catch {
      console.log(error);
    }
  }
  static async getSubCommentsByCommentId(req, res) {
    try {
      const data = {
        parentCommentId: req.body.id,
      };
      res.send(await commentService.getSubCommentsByCommentId(data));
    } catch {
      console.log(error);
    }
  }
}

export default CommentController;

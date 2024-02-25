import sharp from "sharp";
import path from "path";
import { error } from "console";
import commentService from "../service/comment.service.js";

class CommentController {
  static async addComment(req, res) {
    try {
      let data;

      if (req.files) {
        const { image, file } = req.files;
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

        data = {
          userId: req.body.userId,
          parentCommentId: req.body.parentCommentId,
          text: req.body.text,
          image: image,
          file: file,
        };
      } else {
        data = {
          userId: req.body.userId,
          parentCommentId: req.body.parentCommentId,
          text: req.body.text,
        };
      }

      const comment = await commentService.addComment(data);
      res.status(201).json(comment);
    } catch (error) {
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
    } catch (error) {
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
    } catch (error) {
      console.log(error);
    }
  }
  static async getAllComments() {
    try {
      res.send(await commentService.getAllComments());
    } catch (error) {
      console.log(error);
    }
  }
  static async getSubCommentsByCommentId(req, res) {
    try {
      const data = {
        parentCommentId: req.body.id,
      };
      res.send(await commentService.getSubCommentsByCommentId(data));
    } catch (error) {
      console.log(error);
    }
  }
}

export default CommentController;

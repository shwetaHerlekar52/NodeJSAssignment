const express = require("express");
const router = express.Router();

const postController = require("../controllers/post.controller");

/**
 * @swagger
 * /addPost:
 *   post:
 *     parameters:
 *      - in: body
 *        name: Post
 *        required: true
 *        schema:
 *          type: object
 *        description: Post
 *     tags:
 *       - Post
 *     description: Creates a new post
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successful
 */
router.post("/addPost", postController.add);

module.exports = router;

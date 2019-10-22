const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

/**
 * @swagger
 * /add:
 *   post:
 *     parameters:
 *      - in: body
 *        name: User
 *        required: true
 *        schema:
 *          type: object
 *        description: User details
 *     tags:
 *       - User
 *     description: Creates a new user
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successful
 */
router.post("/add", userController.add);

/**
 * @swagger
 * /modify/{email}:
 *   put:
 *     parameters:
 *      - in: body
 *        name: User
 *        required: true
 *        schema:
 *          type: object
 *        description: User details
 *      - name: email
 *        description: User's email id
 *        in: path
 *        required: true
 *        type: string
 *     tags:
 *       - User
 *     description: Updates user details
 *     produces:
 *       - application/json
 *     responses:
 *       204:
 *         description: Successful
 */
router.put("/modify/:email", userController.modify);

/**
 * @swagger
 * /get/{email}:
 *   get:
 *     tags:
 *       - User
 *     description: Returns User's details
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: User's email id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successful
 *       500:
 *         description: Failure
 *       400:
 *         description: Bad Request
 */
router.get("/get/:email", userController.get);

/**
 * @swagger
 * /delete/{email}:
 *   delete:
 *     tags:
 *       - User
 *     description: Delete user according to email
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: User's email
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       204:
 *         description: Successful
 *       500:
 *         description: Failure
 *       400:
 *         description: Bad Request
 */
router.delete("/delete/:email", userController.delete);

/**
 * @swagger
 * /signup:
 *   post:
 *     parameters:
 *      - in: body
 *        name: User
 *        required: true
 *        schema:
 *          type: object
 *        description: User details
 *     tags:
 *       - User
 *     description: Creates a new user
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successful
 */
router.post("/signup", userController.signup);

/**
 * @swagger
 * /add:
 *   post:
 *     parameters:
 *      - in: body
 *        name: User
 *        required: true
 *        schema:
 *          type: object
 *        description: User details
 *     tags:
 *       - User
 *     description: Logs in new user
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successful
 */
router.post("/login", userController.login);

/**
 * @swagger
 * /logout:
 *   delete:
 *     tags:
 *       - User
 *     description: Destroys user session and logs out
 *     produces:
 *       - application/json
 *     responses:
 *       204:
 *         description: Successful
 *       500:
 *         description: Failure
 *       400:
 *         description: Bad Request
 */
router.delete("/logout", userController.logout);

module.exports = router;

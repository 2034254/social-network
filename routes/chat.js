const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chatController");
const checkAuth = require("../middleware/checkAuth");
const chatValidator = require("../middleware/schemaValidators/chatValidator");
const chechRoom = require("../middleware/chechRoom");

/**
 * @swagger
 * tags:
 *   name: Chat
 *   description: API endpoints for handling chat functionality
 */

/**
 * @swagger
 * /getChatRooms:
 *   post:
 *     summary: Get chat rooms for the authenticated user.
 *     tags: [Chat]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful response with chat rooms data.
 *       401:
 *         description: Unauthorized access.
 */
router.post("/getChatRooms/", checkAuth, chatController.getChatRooms);

/**
 * @swagger
 * /getMessagesForRoom:
 *   post:
 *     summary: Get messages for a specific chat room.
 *     tags: [Chat]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema: 
 *             $ref: '#/components/schemas/GetMessagesForRoom'
 *     responses:
 *       200:
 *         description: Successful response with messages for the room.
 *       401:
 *         description: Unauthorized access.
 *       422:
 *         description: Validation error in the request body.
 */
router.post(
  "/getMessagesForRoom",
  checkAuth,
  chatValidator.getMessagesForRoom,
  chatController.getMessagesForRoom
);

/**
 * @swagger
 * /sendImage:
 *   post:
 *     summary: Send an image in a chat room.
 *     tags: [Chat]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema: 
 *             $ref: '#/components/schemas/SendImage'
 *     responses:
 *       200:
 *         description: Successful response with details of the sent image message.
 *       401:
 *         description: Unauthorized access.
 *       422:
 *         description: Validation error in the request body.
 */
router.post(
  "/sendImage",
  checkAuth,
  chatController.upload,
  chatValidator.sendImage,
  chechRoom,
  chatController.createImageMessage
);

/**
 * @swagger
 * /call:
 *   post:
 *     summary: Initiate a call in a chat room.
 *     tags: [Chat]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema: 
 *             $ref: '#/components/schemas/HandleCall'
 *     responses:
 *       200:
 *         description: Successful response with details of the initiated call.
 *       401:
 *         description: Unauthorized access.
 *       422:
 *         description: Validation error in the request body.
 */
router.post(
  "/call",
  checkAuth,
  chatValidator.handleCall,
  chechRoom,
  chatController.handleCall
);

/**
 * @swagger
 * /answer:
 *   post:
 *     summary: Answer a call in a chat room.
 *     tags: [Chat]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema: 
 *             $ref: '#/components/schemas/AnswerCall'
 *     responses:
 *       200:
 *         description: Successful response with details of the answered call.
 *       401:
 *         description: Unauthorized access.
 *       422:
 *         description: Validation error in the request body.
 */
router.post(
  "/answer",
  checkAuth,
  chatValidator.answer,
  chechRoom,
  chatController.answer
);

/**
 * @swagger
 * /sendMessage:
 *   post:
 *     summary: Send a text message in a chat room.
 *     tags: [Chat]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema: 
 *             $ref: '#/components/schemas/SendMessage'
 *     responses:
 *       200:
 *         description: Successful response with details of the sent text message.
 *       401:
 *         description: Unauthorized access.
 *       422:
 *         description: Validation error in the request body.
 */
router.post(
  "/sendMessage",
  checkAuth,
  chatValidator.sendMessage,
  chechRoom,
  chatController.sendMessage
);

/**
 * @swagger
 * /readMessages:
 *   post:
 *     summary: Mark messages as read in a chat room.
 *     tags: [Chat]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema: 
 *             $ref: '#/components/schemas/ReadMessages'
 *     responses:
 *       200:
 *         description: Successful response after marking messages as read.
 *       401:
 *         description: Unauthorized access.
 *       422:
 *         description: Validation error in the request body.
 */
router.post(
  "/readMessages",
  checkAuth,
  chatValidator.readMessages,
  chechRoom,
  chatController.readMessages
);

module.exports = router;

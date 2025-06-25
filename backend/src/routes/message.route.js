import express from 'express';
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUsersForSidebar, getMessages, sendMessage } from '../controllers/message.controller.js';
const router = express.Router();
import multer from "multer";
const upload = multer({ dest: "uploads/" });


router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id" , protectRoute, getMessages);
router.post("/send/:id",upload.single("image"), protectRoute, sendMessage);

export default router;
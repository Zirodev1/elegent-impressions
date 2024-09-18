import express from 'express';
import { createPost, deletepost, getposts, updatepost } from '../controllers/postController.js';
import { verifyToken} from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createPost);
router.get('/getposts', getposts);
router.delete('/deletepost/:postId/:userId', verifyToken, deletepost);
router.put('/updatepost/:postId/:userId', verifyToken, updatepost)

export default router;


import express from 'express';
import ping from '../controllers/testController';
import verifyToken from '../middlewares/verifyToken';

const router = express.Router();
router.get('/ping', verifyToken, ping);

export default router;

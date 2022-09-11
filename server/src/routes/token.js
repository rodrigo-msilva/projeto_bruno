import { Router } from 'express';
import tokenController from '../controllers/TokenController';
const router = new Router();

router.route('/')
.post(tokenController.store)

export default router;
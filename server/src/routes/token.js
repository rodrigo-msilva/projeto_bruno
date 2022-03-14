import { Router } from 'express';
import tokenController from '../controllers/TokenController';
const router = new Router();

router.route('/')
.get(tokenController.store)

export default router;
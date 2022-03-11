import { Router } from 'express';
import homeController from '../controllers/HomeController';
const router = new Router();

router.route('/')
.get(homeController.index)

export default router;
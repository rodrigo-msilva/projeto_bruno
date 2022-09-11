import { Router } from 'express';
import homeController from '../controllers/HomeController';
import loginRequired from '../middlewares/loginRequired';
const router = new Router();

router.route('/')
.get(loginRequired,homeController.index)

router.route('/find/all')
.get(loginRequired,homeController.all)


router.route('/find/today')
.get(loginRequired,homeController.today)

router.route('/dates/:month')
.get(loginRequired,homeController.getDates)


router.route('/:user/:month')
.get(loginRequired,homeController.byUser)



export default router;
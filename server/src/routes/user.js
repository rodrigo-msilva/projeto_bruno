import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';
const router = new Router();

router.route('/')
.post(loginRequired, userController.store)
.get(loginRequired, userController.index)

router.route('/:id')
.get(loginRequired,userController.show)
.put(loginRequired,userController.update)
//.delete(loginRequired,userController.delete)

export default router;

/* 
index => lista todos os usuarios - GET
store/create => cria um novo usuario - POST
delete => apaga um usuario - DELETE (DESNECESSÁRIO)
show => mostra um usuario - GET
update => atualiza um usuario - PUT
*/
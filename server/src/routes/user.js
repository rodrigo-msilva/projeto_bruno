import { Router } from 'express';
import userController from '../controllers/UserController';
const router = new Router();

router.route('/')
.post(userController.store)
.get(userController.index)

router.route('/:id')
.get(userController.show)
.put(userController.update)
.delete(userController.delete)

export default router;

/* 
index => lista todos os usuarios - GET
store/create => cria um novo usuario - POST
delete => apaga um usuario - DELETE
show => mostra um usuario - GET
update => atualiza um usuario - PUT
*/
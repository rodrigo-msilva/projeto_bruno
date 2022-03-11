import User from "../models/User";

class UserController {
    // Index
    async index(req,res) {
        try {
            const users = await User.findAll();
            return res.json(users)
        }catch(err) {
            console.log(err)
            return res.json(null)
        }
    }    
  
    async store(req, res) {
        try{
            const data = req.body
            const newUser = await User.create(data)
            return res.json(newUser)
        } catch(err) {
            return res.status(400).json({
                errors: err.errors.map(error => error.message)
            })
        }
        
    }

    // Show
    async show(req,res) {
        try {
            const { id } = req.params;
            const user = await User.findByPk(id)
            return res.json(user)
        } catch(err) {
            console.log(err)
            return res.json(null)
        } 
    }
    // Update
    async update(req,res) {
        try {
            
            if(!req.params.id){
                return res.status(400).json({
                    errors: ['ID não enviado']
                })
            }
            const {id} = req.params;
            const user = await User.findByPk(id)
            const data = req.body
            if(!user){
                return res.status(400).json({
                    errors: ['Usuário não encontrado']
                })
            }
            const novosDados = await user.update(data);
            return res.json(novosDados)
        }catch(err){
            return res.status(400).json({
                errors: err.errors.map(error => error.message)
            })
        }   
    }
    // Delete
    async delete(req,res) {
        try {
            if(!req.params.id){
                return res.status(400).json({
                    errors: ['ID não enviado']
                })
            }
            const {id} = req.params;
            const user = await User.findByPk(id)
            const data = req.body
            if(!user){
                return res.status(400).json({
                    errors: ['Usuário não encontrado']
                })
            }
            const novosDados = await user.destroy();
            return res.json(user)
        }catch(err){
            return res.status(400).json({
                errors: err.errors.map(error => error.message)
            })
        }  
    }

}

export default new UserController();
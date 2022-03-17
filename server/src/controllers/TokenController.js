import jwt from 'jsonwebtoken'
import User from '../models/User'

class TokenController {
    async store(req,res) {
        const { login, senha } = req.body
        
        if(!login || !senha) {
            return res.satus(401).json({
                errors: ['Preencha todos os campos']
            });
        }

        const user = await User.findOne({ where: { login }});

        if (!user) {
            return res.status(401).json({
                errors: ['Usuário não existe']
            })
        }

        if (!(await user.passwordIsValid(senha))){
            return res.status(401).json({
                errors: ['Senha inválida']
            })
        }
        const { id, nome, email, hierarquia, status } = user
        if(!(user.isActive(status))) {
            return res.status(401).json({
                errors: ['Usuário desativado']
            })
        }

        const token = jwt.sign( { id, nome, email, hierarquia, status }, process.env.TOKEN_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRATION,
        });

        return res.json({token, user: { id, nome, email, hierarquia, status }})
    }
}

export default new TokenController();
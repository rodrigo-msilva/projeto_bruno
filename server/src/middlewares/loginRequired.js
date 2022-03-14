import jwt from "jsonwebtoken";
import User from "../models/User";

export default async (req, res, next) => {
    const {authorization} = req.headers;
    
    if (!authorization) {
        return res.status(401).json({
            errors: ['Login required']
        })
    }

    const [, token] = authorization.split(" ")

    try {
        const dados = jwt.verify(token, process.env.TOKEN_SECRET)
        const { id, nome, email, hierarquia, status} = dados

        const user = await User.findOne({
            where: {
                id,
                nome,
                email,
                status
            }
        })

        if(!user) {
            return res.status(401).json({
                errros: ['Usuário inválido']
            })
        }

        req.userId = id
        req.username = nome
        req.userEmail = email
        req.userHierarchy = hierarquia
        req.userStatus = status
        return next();
    } catch(err) {
        console.log(err)
        return res.status(401).json({
            errors: ['Token expirado ou inválido']
        })
    }
}
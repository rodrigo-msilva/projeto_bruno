import User from "../models/User";

class HomeController {
    async index(req, res) {
        const novoUser = await User.create({
            nome: "Rodrigo Matos da Silva",
            login: "rodrigo.silva",
            senha: "123456",
            email: "rodrigomatos96@hotmail.com",
            hierarquia: "dev"
        })
        res.json(novoUser)
    }
}

export default new HomeController();
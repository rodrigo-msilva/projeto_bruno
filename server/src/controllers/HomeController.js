import User from "../models/User";

class HomeController {
    async index(req, res) {
        return res.json({
            tudoCerto: true,
            id: req.userId,
            nome: req.username,
            email: req.userEmail,
            hierarquia: req.userHierarchy
        })
    }
}

export default new HomeController();
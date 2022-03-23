import Logon from "../models/Logons";

class HomeController {
    async index(req, res) {
        try {
            const logons = await Logon.findAll();
            return res.json(logons)
        }catch(err) {
            console.log(err)
            return res.json(null)
        }
    }    
}

export default new HomeController();
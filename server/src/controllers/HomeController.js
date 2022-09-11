import Logon from "../models/Logons";
import sequelize from 'sequelize'

//const qry = "select user, count(user), convert(data_hora,date) as data from projeto_bruno.csv_projeto_bruno_csv group by user, data" 

class HomeController {
    async all(req, res) {
        try {
            const logons = await Logon.findAll();
           
            return res.json(logons)
        }catch(err) {
            console.log(err)
            return res.json(null)
        }
    }
    
    async index(req, res) {
        try {
            const logons = await Logon.findAll({
                attributes: ['USUARIO'],
                order: [['USUARIO','asc']],
                group: ['USUARIO']
            });
            return res.json(logons)
        }catch(err) {
            console.log(err)
            return res.json(null)
        }
    }    
    async getDates(req, res) {
        try {
            const logons = await Logon.findAll({
                where: {
                    data_hora: sequelize.where(sequelize.fn('month', sequelize.col('DT_TRATAMENTO')), req.params.month)
                },
                attributes: [[sequelize.fn('date', sequelize.col('DT_TRATAMENTO')), 'data']],
                order: [['DT_TRATAMENTO','asc']],
                group: ['data'],
            });
            return res.json(logons)
        }catch(err) {
            console.log(err)
            return res.json(null)
        }
    }

    async byUser(req, res) {
        try {
            const logons = await Logon.findAll({
               where: {
                    USUARIO: req.params.user,
                    data_hora: sequelize.where(sequelize.fn('month', sequelize.col('DT_TRATAMENTO')), req.params.month)
               },
                attributes: [[sequelize.fn('date', sequelize.col('DT_TRATAMENTO')), 'data'], 
                [sequelize.fn('count', sequelize.col('DT_TRATAMENTO')), 'quantidade']], 
                group: ["USUARIO",'data'],
                order: [['DT_TRATAMENTO','asc']]
            });
            
            return res.json(logons)
            
        }catch(err) {
            console.log(err)
            return res.json(null)
        }
    }

    async today(req, res) {
        
        try {
            const logons = await Logon.findAll({
                attributes: ['USUARIO',[sequelize.fn('date', sequelize.col('DT_TRATAMENTO')), 'data'], [
                    sequelize.fn('COUNT', 'USUARIO'), 'quantidade'
                ]],
                group: ['data','USUARIO'],
                order: [['USUARIO','asc']]
            });
            
            return res.json(logons)
        }catch(err) {
            console.log(err)
            return res.json(null)
        }
    }
}

export default new HomeController();
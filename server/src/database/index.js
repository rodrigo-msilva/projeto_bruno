import Sequelize from "sequelize";
import databaseConfig from '../config/database';
import User from '../models/User'
import Logon from '../models/Logons'


const models = [User,Logon]
const connection = new Sequelize(databaseConfig)

models.forEach(model => {
    model.init(connection)
})
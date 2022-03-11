import Sequelize, {Model} from 'sequelize';

class User extends Model {
    static init(sequelize) {
        super.init({
            nome: Sequelize.STRING,
            login: Sequelize.STRING,
            senha: Sequelize.STRING,
            email: Sequelize.STRING,
            hierarquia: Sequelize.STRING
        }, {
            sequelize,
        })

    }

}

export default User;
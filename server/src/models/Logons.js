import Sequelize, {Model} from 'sequelize';

class Logon extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            }, 
            user: {
                type: Sequelize.STRING, 
            },
            data_hora: {
                type: Sequelize.DATE,
            }
        }, {
            sequelize,
            modelName: 'Logon',
            tableName: 'csv_projeto_bruno_csv',
            createdAt: false,
            updatedAt: false,
            timestamps: false
        })
        return this;
    }
}

export default Logon;
import Sequelize, {Model} from 'sequelize';

class Logon extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            "RAZAO SOCIAL": {
                type: Sequelize.STRING, 
            }, 
            CIDADE: {
                type: Sequelize.STRING, 
            },
            UF: {
                type: Sequelize.STRING, 
            },
            "MARGEM CONSIGNADO": {
                type: Sequelize.STRING, 
            },
            "MARGEM CARTAO": {
                type: Sequelize.STRING, 
            },
            LOCACAO: {
                type: Sequelize.STRING, 
            },
            CARGO: {
                type: Sequelize.STRING, 
            },
            DT_NOMEASSAO_ADMISSAO: {
                type: Sequelize.STRING, 
            },
            TIPO_VINCULO: {
                type: Sequelize.STRING, 
            },
            DT_FIM_CONTRATO: {
                type: Sequelize.STRING, 
            },
            CPF: {
                type: Sequelize.STRING, 
            },
            TP_NATJUR: {
                type: Sequelize.STRING, 
            },
            DDD: {
                type: Sequelize.STRING, 
            },
            FONE: {
                type: Sequelize.STRING, 
            },
            DT_TRATAMENTO: {
                type: Sequelize.DATE,
            },
            ID_MAILING: {
                type: Sequelize.STRING, 
            },

            USUARIO: {
                type: Sequelize.STRING, 
            },
            
        }, {
            sequelize,
            modelName: 'Logon',
            tableName: 'logs_tratativas',
            createdAt: false,
            updatedAt: false,
            timestamps: false,
            underscored: false
        })
        return this;
    }
}

export default Logon;
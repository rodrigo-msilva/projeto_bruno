import Sequelize, {Model} from 'sequelize';
import bcryptjs from 'bcryptjs';

class User extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: "",
                validate: {
                    len: {
                        args: [6, 150],
                        msg: "Campo nome deve ter de 6 a 150 caracteres",
                    },
                },
            }, 
            login: {
                type: Sequelize.STRING,
                defaultValue: "",
                unique: {
                    msg: "Login já cadastrado."
                },
                validate: {
                    len: {
                        args: [6, 100],
                        msg: "Campo login deve ter de 6 a 100 caracteres",
                    },
                },
            },
            senha: {
                type: Sequelize.STRING,
                defaultValue: ""
            },
            senha_virtual: {
                type: Sequelize.VIRTUAL,
                validate: {
                    len: {
                        args: [6,20],
                        msg: "Campo senha deve conter de 6 a 20 caracteres",
                    }
                }
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: "",
                unique: {
                    msg: "E-mail já cadastrado."
                },
                validate: {
                    isEmail: {
                        msg: "Digite um e-mail válido",
                    },
                },
            }, 
            hierarquia:  {
                type: Sequelize.STRING,
                defaultValue: "",
                validate: {
                    len: {
                        args: [1, 50],
                        msg: "Campo hierarquia é obrigatório",
                    },
                },
            },
        }, {
            sequelize,
        })

        this.addHook('beforeSave', async user => {
            if(user.senha_virtual) {
                user.senha = await bcryptjs.hash(user.senha_virtual, 10);
            }
        })
        return this;
    }

}

export default User;
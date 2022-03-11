module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nome:{
        type: Sequelize.STRING(160),
        allowNull: false,
      },
      login:{
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      senha:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      hierarquia:{
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false
      }
    });
    
  
  },

  async down (queryInterface) {
     await queryInterface.dropTable('users'); 
  }
};

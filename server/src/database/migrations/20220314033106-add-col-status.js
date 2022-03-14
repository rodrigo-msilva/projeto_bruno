module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.addColumn(
       'users',
       'status',
       {
         type: Sequelize.STRING(15),
         allowNull: false
       }
     )
   
  },

  down: () => {}
}
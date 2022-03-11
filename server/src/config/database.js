require('dotenv').config()
module.exports = {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_DATABASE,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        'createdAt': 'created_at',
        'updatedAt': 'updated_at'
    },
    dialectOptions: {
        timezone: '-03:00'
    },
    timezone: '-03:00'
}
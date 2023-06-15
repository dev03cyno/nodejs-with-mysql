// const { Sequelize,DataTypes } = require('sequelize')
// const { sequelize } = require('../utils/database')
// const { v4: uuidv4 } = require('uuid');
// const uuid = uuidv4();
// const User = sequelize.define('user', {
//     id: {
//         type: DataTypes.UUID,
//         defaultValue: DataTypes.UUIDV4,
//         primaryKey: true
//     },
//     name: { type: Sequelize.STRING, allowNull:false },
//     email: { type: Sequelize.STRING, allowNull:false },
//     username: { type: Sequelize.STRING, allowNull:false },
//     password:{type:Sequelize.STRING,allowNull:false},
//     createdAt: Sequelize.DATE,
//     updatedAt: Sequelize.DATE,
// })

// sequelize.sync()
//   .then(() => {
//     console.log('User model synchronized with database');
//   })
//   .catch((error) => {
//     console.error('Error synchronizing User model:', error);
//   });

// module.exports = User
const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../utils/database');
const { v4: uuidv4 } = require('uuid');

const User = sequelize.define('user', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        validate: {
            isUUID: 4,
        },
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
    },
});

sequelize.sync()
    .then(() => {
        console.log('User model synchronized with the database');
    })
    .catch((error) => {
        console.error('Error synchronizing User model:', error);
    });

module.exports = User;

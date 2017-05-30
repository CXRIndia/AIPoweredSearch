const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('searchtool', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })

const app = express();


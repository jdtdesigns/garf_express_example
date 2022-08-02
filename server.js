const express = require('express');
const { Sequelize, DataTypes, Model } = require('sequelize');

// const mysql = require('mysql2');

// const db = mysql.createPool({
//   host: 'localhost',
//   database: 'garf_db',
//   user: 'root',
//   password: ''
// });

const db = new Sequelize('garf_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

class Character extends Model { }

Character.init({
  // Model attributes are defined here
  character_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize: db, // We need to pass the connection instance
  modelName: 'character' // We need to choose the model name
});

class Lasagna extends Model { }

Lasagna.init({
  // Model attributes are defined here
  pasta: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cheese_type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sauce: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize: db, // We need to pass the connection instance
  modelName: 'lasagna' // We need to choose the model name
});

Character.hasMany(Lasagna);
Lasagna.belongsTo(Character);


const app = express();

app.use(express.json());

app.post('/garf/characters', (req, res) => {
  const new_character_data = req.body;

  Character.create(new_character_data)
    .then(new_character => {
      res.send(new_character);
    });


  // db.query('INSERT INTO characters SET ?', new_character_data, (err, data) => {
  //   if (err) return res.status(500).send();

  //   res.send('Character inserted successfully!');
  // });
});

// http://localhost:3333/garf/characters/1
app.get('/garf/characters/:id', (req, res) => {

  Character.findByPk(req.params.id)
    .then(character => {
      res.send(character);
    });

  // db.query('SELECT * FROM characters WHERE id = ? AND character_name = ?', [req.params.id, 'Odie'], (err, data) => {
  //   if (err) return console.log(err);

  //   res.send(data);
  // });
})


db.sync({ force: false })
  .then(() => {
    app.listen(3333, () => {
      console.log('Listening on port 3333');
    });
  });
const db = require('./models');

db.classes.destroy({
    where: {},
    truncate: true
  })

  db.background.destroy({
    where: {},
    truncate: true
  })
  db.race.destroy({
    where: {},
    truncate: true
  })
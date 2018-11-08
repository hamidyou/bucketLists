const connection = require('../config/connection')

const orm = {
  selectAll: (table, cb) => {
    const queryString = 'SELECT * FROM ??'
    connection.query(queryString, table, cb)
    // connection.end()
  },
  insertOne: (table, cols, vals, cb) => {
    const queryString = 'INSERT INTO ?? (??) VALUES (?)'
    connection.query(queryString, [table, cols, vals], cb)
    console.log('a')
    // connection.end()
  },
  updateRestaurant: (notes = null, date, id, cb) => {
    const queryString = 'UPDATE restaurants SET notes = ?, date_visited = ?, visited = true WHERE id = ?'
    connection.query(queryString, [notes, date, id], cb)
    // connection.end()
  }
}

module.exports = orm

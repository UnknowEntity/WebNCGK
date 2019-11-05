const mysql = require('mysql');

const createConnection = () => {
  return mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'temp'
  });
};

module.exports = {
  load: sql => {
    return new Promise((resolve, reject) => {
      console.log(sql);
      const connection = createConnection();
      connection.connect();
      // eslint-disable-next-line no-unused-vars
      connection.query(sql, (error, results, _fields) => {
        if (error) reject(error);
        resolve(results);
      });
      connection.end();
    });
  },
  insert: (tableName, obj) => {
    return new Promise((resolve, reject) => {
      const connection = createConnection();
      const sql = `INSERT INTO ${tableName} set ?`;
      connection.connect();
      // eslint-disable-next-line no-unused-vars
      connection.query(sql, obj, (error, results, _fields) => {
        if (error) reject(error);
        resolve(results);
      });
      connection.end();
    });
  },
  update: (tableName, obj) => {
    return new Promise((resolve, reject) => {
      var connection = createConnection();
      connection.connect();

      var id = obj.id;
      delete obj.id;
      console.log(id);
      var sql = `update ${tableName} set ? where id = ?`;

      connection.query(sql, [obj, id], (error, results, fields) => {
        if (error) reject(error);
        resolve(results.changedRows);
      });
      connection.end();
    });
  }
};

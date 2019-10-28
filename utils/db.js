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
  }
};

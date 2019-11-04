const db = require('../utils/db');

const userModel = {
  findOne({ email, password }) {
    return db.load(
      `select * from user where email='${email}' and password='${password}'`
    );
  },
  findOneById(id) {
    // console.log(id);
    return db.load(`select * from user where id=${id}`);
  },
  add(user) {
    return db.insert('user', user);
  },
  update: function(user) {
    return db.update('user', user);
  }
};

module.exports = userModel;

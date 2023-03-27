const mysql = require("mysql");

module.exports = {
  createUsers: async (
    pool,
    username,
    password,
    firstName,
    lastName,
    email,
    gender
  ) => {
    var sql =
      "INSERT INTO users (user_name, user_pwd, first_name, last_name, email , gender) " +
      "VALUES (?, ?, ?, ?, ?, ?)";
    sql = mysql.format(sql, [
      username,
      password,
      firstName,
      lastName,
      email,
      gender,
    ]);

    return await pool.query(sql);
  },
  getByUserId: async (pool, userId) => {
    var sql = "SELECT * FROM users WHERE user_id = ?";
    sql = mysql.format(sql, [userId]);

    return await pool.query(sql);
  },
  updateUser: async (
    pool,
    userId,
    username,
    password,
    firstname,
    lastname,
    email,
    gender
  ) => {
    var sql =
      "UPDATE users SET " +
      "user_name=?," +
      "user_pwd=?," +
      "first_name=?," +
      "last_name=?, " +
      "email = ?, " +
      "gender = ? " +
      "WHERE user_id = ?";
    sql = mysql.format(sql, [
      userId,
      username,
      password,
      firstname,
      lastname,
      email,
      gender,
    ]);

    return await pool.query(sql);
  },
  deleteUser: async (pool, userId) => {
    var sql = "DELETE FROM users WHERE user_id = ?";
    sql = mysql.format(sql, [userId]);

    return await pool.query(sql);
  },
};

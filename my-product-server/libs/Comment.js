const mysql = require("mysql");

module.exports = {
  createComment: async (pool, commentName, commentTypeId) => {
    var sql =
      "INSERT INTO comments (comment_name, comment_type_id) " + "VALUES (?, ?)";
    sql = mysql.format(sql, [commentName, commentTypeId]);

    return await pool.query(sql);
  },

  getByCommentId: async (pool, commentId) => {
    var sql = "SELECT * FROM comments WHERE comment_id = ?";
    sql = mysql.format(sql, [commentId]);

    return await pool.query(sql);
  },

  updateComment: async (pool, commentId, commentName, commentTypeId) => {
    var sql =
      "UPDATE comments SET " +
      "comment_name=?," +
      "comment_type_id=?," +
      "WHERE comment_id = ?";
    sql = mysql.format(sql, [commentName, commentTypeId, commentId]);

    return await pool.query(sql);
  },

  deleteComment: async (pool, commentId) => {
    var sql = "DELETE FROM comments WHERE comment_id = ?";
    sql = mysql.format(sql, [commentId]);

    return await pool.query(sql);
  },

  updateImage: async (pool, commentId, fileName) => {
    var sql = "UPDATE comments SET image_url = ? " + "WHERE comment_id = ?";
    sql = mysql.format(sql, [fileName, commentId]);

    return await pool.query(sql);
  },

  getSumComment: async (pool) => {
    var sql =
      "SELECT a.comment_type_id," +
      "b.comment_type_name," +
      "SUM(a.stock) as comment_count " +
      "FROM comments a " +
      "JOIN comment_types b ON a.comment_type_id = b.comment_type_id " +
      "GROUP BY a.comment_type_id, b.comment_type_name";

    return await pool.query(sql);
  },
};

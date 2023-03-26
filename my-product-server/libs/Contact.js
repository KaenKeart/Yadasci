const mysql = require("mysql");

module.exports = {
    getByContactId: async (pool, contactId) => {
        var sql = "SELECT * FROM contact WHERE contact_id = ?";
        sql = mysql.format(sql, [contactId]);

        return await pool.query(sql);
    }
}
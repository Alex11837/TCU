const mariadb = require('mariadb');
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: 'secret',
  db: 'SMSTEXT',
  connectionLimit: 5
});
export default async function createQuery(query) {
  let conn;
  try {
    conn = await pool.getConnection(query);
    const res = await conn.query(query);
    console.log(res); //[ {val: 1}, meta: ... ]
    return res
  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.end();
  }
}
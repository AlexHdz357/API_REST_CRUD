import sql from 'mssql'

const dbSettings = {
    user: 'tofu123',
    password: 'tempura123@',
    server: 'localhost',
    database: 'whirlpool',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings)
    return pool;
  } catch (error) {
    console.error(error)
  }
}

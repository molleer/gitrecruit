import pg from 'pg';

const getQuery = () => {
  const pool = new pg.Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
  });

  return (
    sql: string,
    values: Array<any>,
    convertResult: (res: pg.QueryResult<any>) => any = (res) => res
  ) =>
    new Promise((resolve, reject) => {
      pool
        .query(sql, values)
        .then((res) => resolve(convertResult(res)))
        .catch((err) => reject(err));
    });
};

export default getQuery;

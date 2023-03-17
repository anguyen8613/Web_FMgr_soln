import { Request, Response } from 'express';
import { pool } from '../db/db';

export const getCustomer = (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    //make db call here
    pool.connect(function (err) {
      if (err) throw err;
      pool.query(
        `
        SELECT * FROM web_hw.customer where ID=?
        `,
        [id],
        function (err, result) {
          if (err) throw err;
          console.log(result);
          res.json(result);
        }
      );
    });
  } catch (e) {
    res.send('Error' + e);
  }
};

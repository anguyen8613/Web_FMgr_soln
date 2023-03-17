import { Request, Response } from 'express';
import { pool } from '../db/db';

export const getCadFiles = (req: Request, res: Response) => {
  const id = req.params.id
  try {
    //make db call here
    pool.connect(function (err) {
      if (err) throw err;
      pool.query(
        `
        SELECT cf2.* FROM
        web_hw.cad_files cf2
        JOIN
        (SELECT cf.* FROM web_hw.customer_parts cp
                LEFT JOIN web_hw.cad_files cf ON cp.CAD_file_ID = cf.ID
                WHERE cp.customer_ID
                IN (
                  SELECT ID FROM web_hw.customer WHERE web_hw.customer.ID=?
                )
        ) AS selected
        ON cf2.parent_CAD_ID = selected.ID
        UNION
        (SELECT cf.* FROM web_hw.customer_parts cp
                LEFT JOIN web_hw.cad_files cf ON cp.CAD_file_ID = cf.ID
                WHERE cp.customer_ID
                IN (
                  SELECT ID FROM web_hw.customer WHERE web_hw.customer.ID=?
                )
        )
        `,
        [id, id],
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
